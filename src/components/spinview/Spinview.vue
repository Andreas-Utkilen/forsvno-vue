<template>
  <div
    class="spinview__wrapper"
  >
    <div
      :class="['spinview', interactiveMode ? 'spinview__interactive' : '']"
    >
        <iframe
          :src="url"
          v-show="interactiveMode"
          :width="width"
          height="100%"
          allow="fullscreen"
          ref="spinview"
        >
        </iframe>
        <img
          :src="cover"
          v-show="!interactiveMode"
          class="spinview__cover-image"
        />
        <button
            v-show="interactiveMode"
            @click="exitSpinview"
            class="spinview__close-button"
          >
           <img
            :src="icons.close"
           />
        </button>
        <div
          v-show="!interactiveMode"
          class="spinview__overlay"
        >
          <button
            @click="enterSpinview"
            class="spinview__button-wrapper sideways-hover  sideways-hover__reverse"
          >
            <span
              class="spinview__icon sideways-hover__icon">
            </span>
            <span
              class="spinview__button underline-draw__target"
            >
              Se museum
            </span>
          </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinview",
  props: {
    /**
     * Iframe url
     */
    url: {
      type: String,
      default: ""
    },
    /**
     * Cover image src url
     */
    cover: {
      type: String,
      default: ""
    },
    /**
     * Icons
     */
    icons: {
      type: [Object, Boolean],
      default: false
    }
  },
  data: () => ({
    interactiveMode: false
  }),
  mounted() {
    this.$refs.spinview.style.height = window.innerHeight;
    window.addEventListener("resize", this.resize);
  },
  methods: {
    enterSpinview: function () {
      this.interactiveMode = true;
    },
    exitSpinview: function () {
      this.interactiveMode = false;
    },
    resize: function () {
      this.$refs.spinview.style.height = window.innerHeight;
    }
  }
};
</script>
