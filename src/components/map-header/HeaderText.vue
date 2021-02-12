<template>
    <div
      class="map-header__title-wrapper"
    >
      <h1>OPERASJONER</h1>
      <p>Siden 1947 har Norge bidratt i 100 internasjonale operasjoner</p>
      <button
        @click="enterFullScreen"
      >
        Se hvor vi opererer
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
     * Enter full screen function
     *
     * @value string
     */
    enterFullScreen: {
      type: Function
    },
    /**
     * Localization
     *
     * @values {
     *   key: string,
     * }
     */
    localize: {
      type: Object
    }
  }
};
</script>
<style lang="scss">
.map-header__wrapper{
  .map-header__title-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    color: white;
    text-align: center;
    h1 {
      font-weight: 500;
      font-size: 90px;
    }
    p {
      font-weight: 400;
      font-size: 20px;
      margin-bottom: 3.5rem;
    }
    button {
      font-weight: 500;
      color: #191B21 !important;
      display: inline-block;
      padding: 0.7rem 1.2rem 0.6rem 1.2rem;
      background: #FFFFFF;
      border-radius: 5rem;
      text-decoration: none;
      border: none;
      &:focus {
      }
    }
  }
}

</style>
