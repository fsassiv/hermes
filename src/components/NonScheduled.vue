<template>
  <div class="dep">
    <Carousel
      :loop="true"
      :scrollPerPage="false"
      :per-page="3"
      :paginationEnabled="false"
      v-if="company.length!=0"
      class="dep__carousel"
    >
      <Slide
        class="dep__item"
        v-for="dep in company[0].deps"
        :data-index="dep._id"
        :data-name="dep.name"
        :key="dep._id"
        :class="{'active':activeIndex==dep._id}"
        @slide-click="handleSlideClick"
      >
        <Logo/>
        <p class="dep__item-label">{{dep.label}}</p>
      </Slide>
    </Carousel>
  </div>
</template>
<script>
import Logo from "../assets/logo.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  data() {
    return {
      company: [],
      activeIndex: 0
    };
  },
  created() {
    fetch("https://hermes-ws.herokuapp.com/api/v1/deps")
      .then(data => {
        return data.json();
      })
      .then(deps => {
        // this.deps = deps;
        this.company = deps.filter(dep => {
          return dep._id == this.$store.getters.getCompany._id;
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
    this.$nextTick(() => {
      let sidePanelText = document.querySelector(".iden__sidepanel-text");
      sidePanelText.innerHTML =
        "Selecione ao lado o setor a a qual deseja tratar";
    });
  },
  methods: {
    handleSlideClick: function(dataset) {
      this.activeIndex = dataset.index;
    }
  },
  components: {
    Carousel,
    Slide,
    Logo
  }
};
</script>
<style>
</style>
