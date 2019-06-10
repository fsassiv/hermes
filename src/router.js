import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

// Lazy loading components
const Iden = resolve => {
  require.ensure(
    ["./views/Identification.vue"],
    () => {
      resolve(require("./views/Identification.vue"));
    },
    "iden"
  );
};

const Path = resolve => {
  require.ensure(
    ["./components/Path.vue"],
    () => {
      resolve(require("./components/Path.vue"));
    },
    "path"
  );
};

const Scheduled = resolve => {
  require.ensure(
    ["./components/Scheduled.vue"],
    () => {
      resolve(require("./components/Scheduled.vue"));
    },
    "scheduled"
  );
};

const NonScheduled = resolve => {
  require.ensure(
    ["./components/NonScheduled.vue"],
    () => {
      resolve(require("./components/NonScheduled.vue"));
    },
    "nonScheduled"
  );
};

const NewGuest = resolve => {
  require.ensure(
    ["./components/NewGuest.vue"],
    () => {
      resolve(require("./components/NewGuest.vue"));
    },
    "newguest"
  );
};

const Success = resolve => {
  require.ensure(
    ["./components/Success.vue"],
    () => {
      resolve(require("./components/Success.vue"));
    },
    "success"
  );
};

const Camera = resolve => {
  require.ensure(
    ["./components/Camera.vue"],
    () => {
      resolve(require("./components/Camera.vue"));
    },
    "camera"
  );
};

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/iden",
      component: Iden,
      children: [
        { path: "", name: "path", component: Path },
        { path: "scheduled", component: Scheduled },
        { path: "nonscheduled", component: NonScheduled },
        { path: "newguest", component: NewGuest },
        { path: "camera", component: Camera },
        { path: "success", component: Success }
      ]
    },
    { path: "*", redirect: "/" }
  ]
});
