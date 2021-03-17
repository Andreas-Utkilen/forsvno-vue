<template>
  <div
    class="spinview__wrapper"
  >
    <div
      class="spinview"
    >
        <iframe
          :src="url"
          v-show="interactiveMode"
          :width="width"
          height="100%"
          allow="fullscreen"
          id="spinview"
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
            <span class="spinview__icon sideways-hover__icon"></span>
            <span class="spinview__button underline-draw__target">Se museum</span>
          </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinview",
  props: {
    url: String,
    cover: String,
    icons: {}
  },
  data: () => ({
    interactiveMode: false
  }),
  methods: {
    enterSpinview: function () {
      const width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
      const height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
      console.log(navigator.userAgent);
      if (width < 500 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const spinview = document.getElementById("spinview");
        console.log(spinview);
        if (spinview.requestFullscreen) {
          spinview.requestFullscreen();
        } else if (spinview.msRequestFullscreen) { /* IE11 */
          spinview.msRequestFullscreen();
        } else if (spinview.mozRequestFullScreen) {
          spinview.mozRequestFullScreen();
        } else if (spinview.webkitRequestFullScreen) {
          spinview.webkitRequestFullScreen();
        }
      }
      this.interactiveMode = true;
    },
    exitSpinview: function () {
      this.interactiveMode = false;
    }
  },
  computed: {
    width() {
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
  }
};
</script>
