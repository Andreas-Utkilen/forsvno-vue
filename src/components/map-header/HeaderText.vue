<template>
    <div
      ref="wrapper"
      class="map-header__title-wrapper"
    >
      <h1>{{ header }}</h1>
      <p>{{ subheader }}</p>
      <button
        @click="_enterFullScreen"
        v-show="buttonText"
      >
        {{ buttonText }}
      </button>
    </div>
</template>

<script>

export default {
  name: "HeaderText",
  props: {
    /**
     * Header
     *
     * @value string
     */
    header: {
      type: String,
      default: ""
    },
    /**
     * Subheader text
     *
     * @value string
     */
    subheader: {
      type: String,
      default: ""
    },
    /**
     * Button text
     *
     * @value string
     */
    buttonText: {
      type: String,
      default: ""
    },
    /**
     * Enter full screen function
     *
     * @value string
     */
    enterFullScreen: {
      type: Function
    }
  },
  methods: {
    /*
     * Enter fullscreen. Fades out text.
     */
    _enterFullScreen: function () {
      this.enterFullScreen();
      try {
        this.$refs.wrapper.animate([
          {
            opacity: "0",
            zIndex: -1
          }
        ], {
          duration: 500,
          easing: "ease-out",
          fill: "forwards"
        });
      } catch {
        this.$refs.wrapper.style.opacity = 0;
        this.$refs.wrapper.style.zIndex = -1;
      }
    },
    /*
     * Exit fullscreen. Fades in text.
     */
    _exitFullScreen: function () {
      try {
        this.$refs.wrapper.animate([
          {
            opacity: "1",
            zIndex: 10
          }
        ], {
          duration: 500,
          easing: "ease-out",
          fill: "forwards"
        });
      } catch {
        this.$refs.wrapper.style.opacity = 1;
        this.$refs.wrapper.style.zIndex = 10;
      }
    }
  }
};
</script>
