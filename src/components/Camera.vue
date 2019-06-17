<template>
  <div class="camera">
    <div class="camera__frame">
      <div class="camera__frame-overlay">
        <span class="camera__frame-counter">{{camera_counter}}</span>
      </div>
      <div class="camera__error" :class="{active:!supported}">
        <p class="camera__error-text">Acesso à câmera não suportado/permitido por este despositivo.</p>
      </div>
      <video id="player" class="camera__player" autoplay></video>
      <img :src="photo" class="camera__img">
    </div>

    <div class="camera__ctrl-box">
      <button
        class="camera__btn camera__btn-take-photo is-poppins"
        @click="countDown"
      >Tirar outra foto</button>
      <button
        class="camera__btn camera__btn-go is-poppins"
        :disabled="photo==''"
        @click="handleClick"
      >Prosseguir</button>
    </div>
  </div>
</template>
<script>
import Camera from "../Camera";

export default {
  data() {
    return {
      supported: true,
      camera: "",
      photo: "",
      imgElem: "",
      camera_counter: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      let sidePanelText = document.querySelector(".iden__sidepanel-text");
      sidePanelText.innerHTML =
        "Nos só vamos tirar uma foto para notificar aos anfitriões que você ja chegou";
      //Check device media support
      if ("mediaDevices" in navigator) {
        //Start camera
      } else {
        //Camera feature not supported
        this.supported = false;
      }
      this.imgElem = document.querySelector(".camera__img");
      //Set camera element
      this.camera = new Camera(document.querySelector("#player"));

      //Auto init camera
      this.camera.switch_on();
      this.countDown();
    });
  },
  beforeDestroy() {
    //Turn off the camera
    this.camera.switch_off();
  },
  methods: {
    countDown: function() {
      this.camera_counter = 5;
      this.photo = "";
      this.imgElem.classList.remove("active");
      let counter = setInterval(() => {
        this.camera_counter--;
        if (this.camera_counter == 0) {
          this.take_photo();
          clearInterval(counter);
        }
      }, 1000);
    },
    take_photo: function() {
      if (this.photo == "") {
        this.photo = this.camera.take_photo();
        this.imgElem.classList.add("active");
      } else {
        this.photo = "";
        this.imgElem.classList.remove("active");
      }
    },
    handleClick: function() {
      this.$router.push("success");
    }
  }
};
</script>

