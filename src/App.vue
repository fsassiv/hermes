<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { async } from "q";
export default {
  mounted() {
    this.$nextTick(this.setFullScreen("html"));
  }
};
</script>
<style>
.slide-leave-active {
  transition: opacity 0.25s ease;
  opacity: 0;
  animation: slide-out 0.25s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active {
  animation: slide-in 0.25s ease-out forwards;
}

@keyframes slide-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-30px);
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(30px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>