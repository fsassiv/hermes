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

//Service worker set up
const prod = process.env.NODE_ENV === "production";
const shouldSW = "serviceWorker" in navigator && prod;
if (shouldSW) {
  navigator.serviceWorker.register("/service-worker.js").then(() => {
    console.log("Service Worker Registered!");
  });
}
