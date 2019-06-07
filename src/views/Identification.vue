<template>
  <div class="iden">
    <div class="iden__top" :style="{backgroundImage:backgroundImg}">
      <app-logo class="iden__logo"/>
    </div>
    <div class="iden__content">
      <div class="iden__sidepanel">
        <p class="iden__sidepanel-text">
          Você possui um convite em QR Code ou algum ID de acesso para
          entrada?
        </p>
        <span class="iden__sidepanel-warning indicator">Selecione</span>
      </div>
    </div>
    <transition name="up" mode="out-in">
      <router-view></router-view>
    </transition>
    <a @click.prevent="goBack" class="app__back-btn">&lt; Voltar</a>
  </div>
</template>

<script>
export default {
  name: "iden",
  data() {
    return {
      backgroundImg: ""
    };
  },
  beforeCreate() {
    //Redirect to home if store.data is empty
    if (this.$store.getters.getActivePanel._id == "") {
      this.$router.push("/");
    }
  },
  created() {
    this.$store.commit("setCurrentPage", this.$options.name);
    this.backgroundImg = this.$store.getters.getPageBackground;
  }
};
</script>
<style>
.up-leave {
  opacity: 0;
}

.up-enter-active {
  animation: slide-up 0.5s ease-out forwards;
}

@keyframes slide-up {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
