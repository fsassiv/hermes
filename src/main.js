import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixin from "./mixins";
import Logo from "./assets/logo.vue";

Vue.component("app-logo", Logo);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
