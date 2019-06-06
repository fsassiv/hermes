<template>
  <div
    to="/iden"
    class="home-panel__option"
    :id="data._id"
    @click.prevent="handleClick"
    :class="{active:active}"
  >
    <div class="home-panel__brand">
      <img class="home-panel__img" :src="'public/img/' + data.logo">
    </div>
    <a class="home-panel__btn">
      Para tratar com a
      <span class="home-panel__target">{{data.alias}}</span>&nbsp;
      <u>aperte aqui</u>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    data: ""
  },
  data() {
    return {
      active: false,
      backgroundImg: "",
      clickCounter: 0
    };
  },
  created() {
    this.clickCounter = 0;
    //Set the panel background img
    this.backgroundImg = `url(public/img/${this.data.background})`;
    //active the index 0
    if (this.data._id == 1) {
      this.active = true;
      this.$emit("loadPanel", this.backgroundImg);
    }
  },
  methods: {
    handleClick() {
      this.clickCounter += 1;
      this.active = true;
      let options = {
        backgroundImg: this.backgroundImg,
        _id: this.data._id
      };
      this.$emit("loadPanel", options);
      this.$store.commit("setPageBackground", options.backgroundImg);
      if (this.clickCounter == 2) {
        this.$store.commit("setActivePanel", this.data);
        this.$router.push("/iden");
      }
    }
  },
  updated() {
    if (!this.active) {
      this.clickCounter = 0;
    }
  }
};
</script>
