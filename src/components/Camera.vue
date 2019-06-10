<template>
  <div class="camera">
    <div class="camera__frame">
      <div class="camera__error" :class="{active:!supported}">
        <p class="camera__error-text">Acesso à câmera não suportado/permitido por este despositivo.</p>
      </div>
      <video id="player" class="camera__player" autoplay></video>
      <img :src="photo" class="camera__img">
    </div>

    <div class="camera__ctrl-box">
      <button
        class="camera__btn camera__btn-take-photo is-poppins"
        @click="take_photo"
      >Tirar outra foto</button>
      <button class="camera__btn camera__btn-go is-poppins" @click="handleClick">Prosseguir</button>
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
      imgElem: ""
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
    });

    //Auto init camera
    setTimeout(() => {
      this.camera.switch_on();
    }, 3000);
  },
  beforeDestroy() {
    //Turn off the camera
    this.camera.switch_off();
  },
  methods: {
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

