<template>
  <div class="new-guest">
    <form @submit.prevent="handleSubmit" class="new-guest__form">
      <input
        type="text"
        id="new-guest__name"
        class="new-guest__name app__input"
        readonly="true"
        @click="clickInput"
      >
      <textarea
        id="new-guest__description"
        class="new-guest__description app__textarea"
        readonly="true"
        @click="clickTextarea"
      ></textarea>
    </form>
    <div
      class="new-guest__keyboard simple-keyboard hg-theme-default hg-layout-default"
      :class="{'active':keyboard_name_status||keyboard_description_status}"
    ></div>
  </div>
</template>
<script>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

export default {
  name: "newguest",
  data() {
    return {
      keyboard_name: {},
      keyboard_description: {},
      keyboard_name_status: false,
      keyboard_description_status: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      let sidePanelText = document.querySelector(".iden__sidepanel-text");
      sidePanelText.innerHTML =
        "Por favor se identifique ao lado, preencha com seu nome e objetivo";
      this.hideElement(".iden__sidepanel-warning");
      document.querySelector(".hg-button-enter").innerHTML = "Próximo";
      document.querySelector(".hg-button-lock").innerHTML = "Voltar";
      document.querySelector(".hg-button-bksp").innerHTML = "Limpar";
    });

    //Asign the keyboard
    this.keyboard_name = new Keyboard();
    this.keyboard_description = new Keyboard();
  },
  methods: {
    clickInput: function() {
      this.keyboard_name_status = true;
      this.keyboard_description_status = false;
    },
    clickTextarea: function() {
      this.keyboard_name_status = false;
      this.keyboard_description_status = true;
    },
    handleSubmit: function() {
      console.log("Submited");
    }
  }
};
</script>
