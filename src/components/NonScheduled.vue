<template>
  <div class="dep">
    <div v-if="company.length!=0" class="dep__carousel">
      <div class="dep__item" v-for="dep in company[0].deps" :key="dep._id">
        <p class="dep__item-label">{{dep.label}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { async } from "q";
export default {
  data() {
    return {
      company: []
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
  }
};
</script>
<style>
</style>
