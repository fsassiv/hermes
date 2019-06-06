import Vue from "vue";

export default Vue.mixin({
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    hideElement(className) {
      document.querySelector(`${className}`).classList.add("app__hide");
    }
  }
});
