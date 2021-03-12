import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSessionStorage from "vue-sessionstorage";
Vue.use (VueSessionStorage);
Vue.config.productionTip = false;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

// Render gebruik je als je volledig Javascript nodig hebt