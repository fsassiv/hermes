<template>
  <form @submit.prevent="handleSubmit">
    <input
      class="input iden__input app__input app__input-default"
      @focus="keyboardStatus=true"
      placeholder="Digite aqui o seu ID..."
      v-model="inputData"
      readonly="true"
    >
    <div
      class="simple-keyboard hg-theme-default hg-layout-default"
      :class="{active:keyboardStatus}"
    ></div>
  </form>
</template>

<script>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

export default {
  name: "scheduled",
  data() {
    return {
      keyboard: {},
      keyboardStatus: false,
      inputData: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      let sidePanelText = document.querySelector(".iden__sidepanel-text");
      sidePanelText.innerHTML =
        "Por favor apresente seu QR ao leitor ou digite o ID ao lado";

      this.hideElement(".iden__sidepanel-warning");
      document.querySelector(".hg-button-enter").innerHTML = "Próximo";
      document.querySelector(".hg-button-lock").innerHTML = "Voltar";
      document.querySelector(".hg-button-bksp").innerHTML = "Limpar";
    });

    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });
  },
  methods: {
    onKeyPress: function(button) {
      if (button == "{lock}") {
        this.keyboardStatus = false;
        this.inputData = "";
        this.$router.go(-1);
      }
      if (button == "{enter}") {
        this.handleSubmit();
      }
      //workarount backspace button
      if (button == "{bksp}") {
        this.inputData = "";
        this.keyboard.setInput(this.inputData);
      }
    },
    onChange: function(input) {
      let lastChar = input.slice(-1);
      this.inputData += lastChar;
      this.keyboard.setInput(this.inputData);
    },
    handleSubmit: function() {
      this.inputData = "";
      this.keyboard.setInput(this.inputData);
      //Requires validation to preceed
      this.$router.push("camera");
    }
  }
};
</script>