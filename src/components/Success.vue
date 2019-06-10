<template>
  <div
    class="success"
    :class="{active:active}"
  >O anfitrião já foi notificado da sua presença na recepção. Por favor, aguarde um momento.</div>
</template>
<script>
export default {
  data() {
    return {
      active: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      let sidePanelText = document.querySelector(".iden__sidepanel-text");
      sidePanelText.innerHTML = "Tudo Pronto.";

      this.hideElement(".app__back-btn");
      this.restart();
    });
  },
  methods: {
    restart: function() {
      this.active = true;
      setTimeout(() => {
        this.$router.go("/");
      }, 6000);
    }
  }
};
</script>
