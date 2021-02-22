import Vue from "vue";
import Vue2TouchEvents from "vue2-touch-events";
import App from "./App.vue";
import "./assets/style/diagram.css";
import "./assets/style/main.css";
import "./assets/style/quiz.css";
import "./assets/style/stepper.css";
import "./assets/style/story.css";
import "./assets/style/promocard-horizontal.css";
import "./assets/style/media-player.css";
import "./assets/style/map-header.css";
import "@babel/polyfill";

Vue.config.productionTip = false;
Vue.use(Vue2TouchEvents);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
