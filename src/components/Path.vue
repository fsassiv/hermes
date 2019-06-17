<template>
  <div class="path" :class="{active:active}">
    <router-link to="/iden/scheduled" tag="a" class="path__block">
      <p class="path__label is-poppins">Sim, possuo um convite</p>
    </router-link>

    <router-link to="/iden/nonscheduled" tag="a" class="path__block">
      <p class="path__label is-poppins">Não, eu não tenho um convite</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "pathComponent",
  data() {
    return {
      active: false,
      data: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      let sidePanelText = document.querySelector(".iden__sidepanel-text");
      sidePanelText.innerHTML =
        "Você possui um convite em QR Code ou algum ID de acesso para entrada?";
    });
    setTimeout(() => {
      this.active = true;
    }, 0);

    //Load the selected panel data with the store
    this.data = this.$store.getters.getActivePanel;
  }
};
</script>

