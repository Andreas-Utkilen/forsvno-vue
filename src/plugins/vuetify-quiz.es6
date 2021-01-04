import Vue from "vue";
import Vuetify, {
  VImg,
  VStepper,
  VStepperContent,
  VStepperItems
} from "vuetify/lib";

const opts = {
  components: {
    VStepper,
    VImg,
    VStepperContent,
    VStepperItems
  }
};

Vue.use(Vuetify, opts);

export default new Vuetify(opts);
