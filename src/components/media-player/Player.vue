<template>
  <div
    class="media-player__player-inner"
  >
    <h6>
      {{ header }}
    </h6>
    <div
      class="media-player__player-container"
    >
      <img
        :src="cover"
        alt=""
        class="media-player__player-cover"
      >
      <div class="media-player__player-info">
         <h3>
          {{ title }}
        </h3>
        <p>
          {{ description }}
        </p>
      </div>
      <div
        class="media-player__player-controls"
      >
        <div
          class="media-player__player-btn-container"
        >
          <button
            v-show="!playing"
            v-on:click="play()"
            :style="{ marginRight: isiPhone === null ? '0' : '1rem' }"
            class="media-player__player-btn"
          >
            <img
              :src="icons.play"
              alt="Play"
            >
          </button>
          <button
            v-show="playing"
            v-on:click="pause()"
            :style="{ marginRight: isiPhone === null ? '0' : '1rem' }"
            class="media-player__player-btn"
          >
            <img
              :src="icons.pause"
              alt="Pause"
            >
          </button>

          <div
            v-show="isiPhone === null"
            class="media-player__volume-controls"
          >
            <button
              @click="mute"
              class="media-player__player-volume media-player__player-btn"
            >
              <img
                :src="volumeIcon || icons.volume100"
                alt="Volume"
              >
            </button>
            <input
              v-model="volume"
              ref="volumeSlider"
              type="range"
              min="0"
              max="100">
          </div>
          <div class="media-player__progress-container">
            <canvas
              @mousedown="rewind"
              @mousemove="rewind"
              @mouseup="rewind"
              v-touch:start="rewind"
              v-touch:moving="rewind"
              v-touch:end="rewind"
              ref="canvas"
            >
            </canvas>
            <p>{{ currentTime }}/{{ duration }}</p>
          </div>
        </div>
      </div>
    </div>
    <Acast
        :src="src"
        :state="playerState"
      />
  </div>
</template>

<script>
import EventBus from "../../event-bus.es6";
import Wave from "./utils/Wave";
import Acast from "./AcastIframe.vue";

export default {
  name: "PodcastPlayer",
  components: {
    Acast
  },
  props: {
    /**
     * Title of the media-player.
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Header.
     */
    header: {
      type: String,
      default: ""
    },
    /**
     * A descriptive text about the media-player
     */
    description: {
      type: String,
      default: ""
    },
    /**
     * Cover image
     */
    cover: {
      type: String
    },
    /**
     * Audio src
     */
    src: {
      type: String
    },
    /**
     * wave data
     */
    waveData: {
      type: Array,
      default: function () {
        return [49.5, 67.35, 50.23, 80, 75.75, 61.38, 87.89, 50.67, 42,
          61.25, 98.32, 95.5, 39.56, 47.51, 24.40, 48, 57.09, 63.44,
          73.4, 54.3, 78.9, 82.72, 40, 59.35, 60.25, 22.65, 65.68,
          77.49, 98.32, 33.62, 52.66, 90.65, 71.38, 59.55, 74.5,
          60.02, 70.43, 79.75, 63.58, 82.73];
      }
    },
    /**
     * Object that contains all icons for the forms
     *
     * @values {
     *  arrowRight: string,
     *  play: string,
     *  pause: string,
     *  volume0: string,
     *  volume33: string,
     *  volume66: string,
     *  volume100: string
     * }
     */
    icons: {
      type: [Object, Boolean],
      default: false
    }
  },
  created() {
    this.icon = this.playIcon;
  },
  mounted() {
    this.wave = new Wave(this.$refs.canvas, this.waveData);
    this.wave.update(this.waveData, 0);
  },
  data: () => ({
    volume: 100,
    volumeIcon: null,
    wave: null,
    animationFrame: null,
    currentTime: "00:00",
    duration: "00:00",
    playerState: {
      paused: true,
      muted: false,
      volume: 100,
      duration: 0,
      time: 0
    },
    mousedown: false,
    rewindTime: null,
    isiPhone: window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/iPhone/i)
  }),
  watch: {
    /*
     * Setting volume from slider
     */
    volume: function () {
      this.playerState.volume = this.volume;
      this.$refs.volumeSlider.style.background = `linear-gradient(to right, #191b21 0%, #191b21 ${this.volume}%, #fff ${this.volume}%, white 100%)`;
      this.volumeIcon = this.iconFor(this.volume);
    },
    /*
     * Formatting seconds to readable format
     */
    "playerState.duration": function (value) {
      this.duration = this.secondsToHms(value);
      this.wave.update(this.waveData, value);
    },
    /*
     * Formatting seconds to readable format
     */
    "playerState.time": function (value) {
      if (!this.mousedown) {
        this.currentTime = this.secondsToHms(value);
      }
    }
  },
  computed: {
    playing() { return !this.playerState.paused; }
  },
  methods: {
    /*
     * Wave animation controller
     */
    animate() {
      this.wave.draw(this.playerState.time);
      if (!this.mousedown) this.animationFrame = requestAnimationFrame(this.animate);
    },
    /*
     * Start playing in Iframe
     */
    play() {
      EventBus.$emit("media-player__play");
      this.animationFrame = requestAnimationFrame(this.animate);
    },
    /*
     * Pause in Iframe
     */
    pause() {
      cancelAnimationFrame(this.animationFrame);
      EventBus.$emit("media-player__pause");
    },
    mute() {
      if (!this.playerState.muted) {
        EventBus.$emit("media-player__mute");
        this.volumeIcon = this.iconFor(this.volume, true);
      } else {
        EventBus.$emit("media-player__unmute");
        this.volumeIcon = this.iconFor(this.volume, false);
      }
    },
    /*
     * Rewind, done by dragging on wave
     */
    rewind(event) {
      if (event.type === "mousedown" || event.type === "touchstart") {
        this.mousedown = true;
      } else if (event.type === "mouseup" || event.type === "touchend") {
        this.mousedown = false;
        if (this.rewindTime != null) {
          EventBus.$emit("media-player__rewind", this.rewindTime);
          this.animationFrame = requestAnimationFrame(this.animate);
        }
        this.rewindTime = null;
      } else if ((event.type === "mousemove" || event.type === "touchmove") && this.mousedown) {
        this.rewindTime = this.playerState.duration * ((event.offsetX * window.devicePixelRatio) / event.target.width);
        this.currentTime = this.secondsToHms(this.rewindTime);
        this.wave.draw(this.rewindTime);
      }
    },
    /*
     * Formatting seconds to hh:mm:ss
     */
    secondsToHms(n) {
      let d = Number(n);
      if (Number.isNaN(n)) {
        d = 0;
      }
      const h = Math.floor(d / 3600);
      const m = Math.floor((d % 3600) / 60);
      const s = Math.floor(d % 3600 % 60);

      const hDisplay = h > 0 ? `0${h}:` : "";
      const mDisplay = m < 10 ? `0${m}:` : `${m}:`;
      const sDisplay = s < 10 ? `0${s}` : `${s}`;
      return hDisplay + mDisplay + sDisplay;
    },
    /*
     * Volume icon for volume level
     */
    iconFor(volume, muted) {
      if (volume < 1 || muted) return this.icons.volume0;
      if (volume === 100) return this.icons.volume100;
      if (volume <= 33) return this.icons.volume33;
      if (volume <= 66) return this.icons.volume66;
      return this.icons.volume100;
    }
  }
};
</script>
