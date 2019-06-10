<template>
  <div class="new-guest">
    <form @submit.prevent="handleSubmit" class="new-guest__form">
      <input
        type="text"
        id="new-guest__name"
        class="input new-guest__name app__input app__input-default"
        readonly="true"
        @click="inputClick"
        v-model="inputData"
        placeholder="Digite seu nome"
      >
      <textarea
        id="new-guest__description"
        class="new-guest__description app__textarea app__input-default"
        readonly="true"
        @click="textareaClick"
        v-model="textareaData"
        placeholder="Digite o motivo da visita"
      ></textarea>
    </form>
    <div
      id="new-guest__keyboard"
      class="new-guest__keyboard simple-keyboard hg-theme-default hg-layout-default"
      :class="{'active':keyboardStatus}"
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
      keyboard: {},
      keyboardStatus: false,
      currentInput: "",
      inputData: "",
      textareaData: ""
    };
  },
  created() {
    this.currentInput = "";
    this.inputData = "";
    this.textareaData = "";
  },
  mounted() {
    this.$nextTick(() => {
      let sidePanelText = document.querySelector(".iden__sidepanel-text");
      sidePanelText.innerHTML =
        "Por favor se identifique ao lado, preencha com seu nome e objetivo";
      this.hideElement(".iden__sidepanel-warning");
      //Alter keyboard labels
      document.querySelector(".hg-button-enter").innerHTML = "Próximo";
      document.querySelector(".hg-button-lock").innerHTML = "Voltar";
      document.querySelector(".hg-button-bksp").innerHTML = "Limpar";
    });

    //Asign the keyboard

    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });
  },
  methods: {
    activeKeyboard: function() {
      this.keyboardStatus = true;
    },
    inputClick: function(input) {
      this.activeKeyboard();
      this.currentInput = input.target.id;
      this.inputData = "";
      this.keyboard.setInput(this.inputData);
    },
    textareaClick: function(input) {
      this.activeKeyboard();
      this.currentInput = input.target.id;
      this.textareaData = "";
      this.keyboard.setInput(this.textareaData);
    },
    handleSubmit: function() {
      console.log("Submited");
    },
    //Keyboard events
    onKeyPress: function(button) {
      if (button == "{lock}") {
        this.keyboardStatus = false;
        this.inputData = "";
        this.$router.go(-1);
      }
      if (button == "{enter}") {
        this.handleSubmit();
        if (this.inputData != "" && this.textareaData != "") {
          this.$router.push("camera");
        }
      }
      //workarount backspace button
      if (button == "{bksp}") {
        if (this.currentInput == "new-guest__name") {
          this.inputData = "";
          this.keyboard.setInput(this.inputData);
        } else {
          this.textareaData = "";
          this.keyboard.setInput(this.textareaData);
        }
      }
    },
    onChange: function(input) {
      let lastChar = input.slice(-1);
      //Check the current input
      if (this.currentInput == "new-guest__name") {
        // this.inputData = input;
        this.inputData += lastChar;
        this.keyboard.setInput(this.inputData);
      } else {
        // this.textareaData = input;
        this.textareaData += lastChar;
        this.keyboard.setInput(this.textareaData);
      }
    }
  }
};
</script>
