<template>
  <div>
    <!-- Navigation -->
    <div
      class="container"
    >
      <div
        v-if="isOverflowing"
        class="stepper__arrow"
      >
        <button
          :style="currentStep === 0 && 'visibility: hidden'"
          class="stepper__arrow-left"
          @click="moveTo(currentStep - 1)"
        >
          <img :src="arrowRight" alt="Pil til venstre">
        </button>
        <button
          :style="currentStep === numSteps - 1 && 'visibility: hidden'"
          class="stepper__arrow-right"
          @click="moveTo(currentStep + 1)"
        >
          <img :src="arrowRight" alt="Pil til høyre">
        </button>
      </div>
    </div>
    <!-- Content -->
    <div
      ref="wrapper"
      class="stepper__casket-wrapper"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div
        ref="content"
        :style="`transform: translate3d(calc(50% - 112.5px - ${initialStep * minLength}px), 0px, 0px)`"
      >
        <slot />
      </div>
    </div>
    <!-- Progress bar -->
    <div
      v-if="isOverflowing"
      class="container"
    >
      <div
        class="stepper__progress-bar"
      >
        <div
          ref="progress"
          :style="`width: ${((currentStep + 1) / numSteps) * 100}%`"
          class="stepper__progress-bar-inner"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Casket",
  props: {
    initialStep: Number,
    minLength: Number,
    numSteps: Number,
    arrowRight: String
  },
  data: () => ({
    isOverflowing: false,
    currentStep: 0,
    swipePosition: {
      x: 0,
      y: 0
    },
    isHorizontal: undefined,
    temporaryStep: undefined,
    isTransitioning: false
  }),
  created() {
    this.currentStep = this.initialStep;
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onTouchStart: function (e) {
      this.swipePosition = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
    },

    onTouchMove: function (e) {
      if (this.isHorizontal === undefined) {
        const x = Math.abs(this.swipePosition.x - e.changedTouches[0].clientX);
        const y = Math.abs(this.swipePosition.y - e.changedTouches[0].clientY);
        this.isHorizontal = x > y;
      }
      if (this.isHorizontal && !this.isTransitioning) {
        e.preventDefault();
        const x = this.swipePosition.x - e.changedTouches[0].clientX;
        let step = this.currentStep + (x / this.minLength);
        if (step < 0) {
          step = 0;
        } else if (step > this.numSteps - 1) {
          step = this.numSteps - 1;
        }
        this.$refs.content.style.transform = `translate3d(calc(50% - 112.5px - ${step * this.minLength}px), 0px, 0px)`;
        this.$refs.progress.style.width = `${((step + 1) / this.numSteps) * 100}%`;
        this.temporaryStep = step;
      }
    },

    moveTo: function (step, duration = 300) {
      if (this.$refs.content && this.$refs.progress && !this.isTransitioning) {
        this.isTransitioning = true;

        let currentStep = this.currentStep;
        if (this.temporaryStep !== undefined) {
          currentStep = this.temporaryStep;
        }

        let newStep;
        if (step < 0) {
          newStep = 0;
        } else if (step > this.numSteps - 1) {
          newStep = this.numSteps - 1;
        } else {
          newStep = step;
        }

        this.$refs.content.style.transform = `translate3d(calc(50% - 112.5px - ${currentStep * this.minLength}px), 0px, 0px)`;
        /* this.$refs.content.animate([
          {
            transform: `translate3d(calc(50% - 112.5px - ${newStep * this.minLength}px), 0px, 0px)`
          }
        ], {
          duration: duration,
          easing: "ease-out"
        }); */
        this.$refs.progress.style.width = `${((currentStep + 1) / this.numSteps) * 100}%`;
        /* this.$refs.progress.animate([
          {
            width: `${((newStep + 1) / this.numSteps) * 100}%`
          }
        ], {
          duration: duration,
          easing: "ease-out"
        }); */
        setTimeout(() => {
          this.$refs.content.style.transform = `translate3d(calc(50% - 112.5px - ${newStep * this.minLength}px), 0px, 0px)`;
          this.currentStep = newStep;
          this.isTransitioning = false;
          this.temporaryStep = undefined;
        }, duration);
      }
    },

    onTouchEnd: function () {
      if (this.isHorizontal === true && !this.isTransitioning) {
        this.moveTo(this.findClosest());
      }
      this.isHorizontal = undefined;
    },

    findClosest: function () {
      if (this.temporaryStep !== undefined) {
        return Math.round(this.temporaryStep);
      }
      this.temporaryStep = undefined;
      return this.currentStep;
    },

    onResize: function () {
      this.checkOverflow();
      if (this.isOverflowing) {
        this.moveTo(this.currentStep, 0);
      } else if (this.$refs.content) {
        this.$refs.content.style.transform = "unset";
      }
    },

    checkOverflow: function () {
      if (this.$refs.wrapper) {
        this.$refs.wrapper.classList.add("container");
        this.isOverflowing = this.$refs.wrapper.clientWidth < this.minLength * this.numSteps;
        if (this.isOverflowing) {
          this.$refs.wrapper.classList.remove("container");
        }
      }
    }
  }
};
</script>
