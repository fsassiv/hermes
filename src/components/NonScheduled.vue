<template>
  <div class="dep">
    <Carousel
      :loop="true"
      :scrollPerPage="false"
      :per-page="3"
      :paginationEnabled="false"
      :paginationColor="'#605967'"
      :paginationActiveColor="'#e76852'"
      v-if="company.length!=0"
      class="dep__carousel"
    >
      <Slide
        class="dep__item"
        v-for="dep in company[0].deps"
        :data-index="dep._id"
        :data-name="dep.name"
        :data-label="dep.label"
        :key="dep._id"
        :class="{'active':selectedDep.index==dep._id}"
        @slide-click="handleSlideClick"
      >
        <Logo/>
        <p class="dep__item-label">{{dep.label}}</p>
      </Slide>
    </Carousel>
    <div class="dep__ctrls-box">
      <p class="dep__ctrls-text" v-if="selectedDep==''">Selecione um setor</p>
      <button
        class="dep__ctrls-btn"
        @click="handleGoClick"
        :class="{'active':selectedDep!=''}"
      >Prosseguir</button>
    </div>
  </div>
</template>
<script>
import Logo from "../assets/logo.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "nonscheduled",
  data() {
    return {
      company: [],
      // activeIndex: 0,
      selectedDep: ""
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
        if (this.company.length !== 0) {
          sessionStorage.setItem("deps", JSON.stringify(this.company));
        }
      })
      .catch(err => {
        this.company = JSON.parse(sessionStorage.getItem("deps"));
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
      this.selectedDep = dataset;
    },
    handleGoClick: function(event) {
      if (this.selectedDep == "") return null;
      //Apply logic
      this.$router.push("newguest");
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
