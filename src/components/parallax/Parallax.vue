<template>
  <div
    class="parallax__container"
  >
    <h1>
      Jordan
    </h1>
    <div
      ref="images"
      class="parallax__image-container"
    >
      <div
        v-for="(image, i) in images"
        v-bind:key="i"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          :class="['parallax__image', i % 2 === 0 ? 'parallax__right' : 'parallax__left']"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Parallax",
  props: {
    images: {
      type: Array
    }
  },
  data: () => ({
    imagesDOM: null
  }),
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.imagesDOM = document.getElementsByClassName("parallax__image");
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      event.preventDefault();
      const container = this.$refs.images;
      const start = container.offsetTop;
      const end = container.offsetTop + container.offsetHeight - window.innerHeight;
      const scrollArea = end - start;

      let current = window.scrollY - start;
      if (current < 0) current = 0;
      console.log(current);

      this.imagesDOM.forEach((image, i) => {
        const trigger = (scrollArea / this.imagesDOM.length) * i;
        if (trigger < current) {
          image.classList.add("parallax__animation");
        }
      });
      // Any code to be executed when the window is scrolled
    }
  }
};
</script>

<style lang="scss">
.parallax__container {
  padding-bottom: 2000px;
  h1 {
    display: block;
    font-size: 250px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  .parallax__image-container {
    padding-top: 10%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows:  60% 40%;
    background-image: linear-gradient(#EDE9E8,#EDE9E8);
    background-size: 100% 55%;
    background-repeat: no-repeat;
    background-position: center 80%;
    z-index: 2;
    margin-top: 100vh;
    div {
      margin-top: 1rem;
      margin-bottom: 1rem;
      img {
        max-width: calc(100% - 1.5rem);
        max-height: 100%;
        object-fit: cover;
        opacity: 0;
      }
      .parallax__left {
        float: left;
        margin-left: 1.5rem;
      }
      .parallax__right {
        float: right;
        margin-right: 1.5rem;
      }
    }
    div:first-child img, div:nth-child(2) img {
      width: calc(100% - 1.5rem);
    }
    div:nth-child(2) {
      display: flex;
      align-items: center;
    }
  }
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.parallax__animation {
  animation: slideIn 1s forwards;
}
.parallax__sticky {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}

</style>
