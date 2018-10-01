import Vue from "vue";
import "@/styles/index.scss"; // global css
import App from "@/app.vue";
import router from "@/router";
import store from "@/store";
import "@/plugins/element.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
