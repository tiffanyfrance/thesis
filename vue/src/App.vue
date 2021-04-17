<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <Hero />
  <Corpus />
  <Emotion />
  <MC />
  <MCBook />
  <IBM />
  <IBMBook />
  <Rainbow />
  <!-- <Hedonometer /> -->
  <!-- <HedonometerBook /> -->
  <LIMBIC />
  <!-- <SVM /> -->
  <!-- <APIs /> -->
  <!-- <TryIt /> -->
  <!-- <Purchase /> -->
  <Conclusion /> 
</template>

<script>
import Hero from "./components/Hero.vue";
import Corpus from "./components/Corpus.vue";
import MC from "./components/MC.vue";
import MCBook from "./components/MCBook.vue";
import IBM from "./components/IBM.vue";
import IBMBook from "./components/IBMBook.vue";
import Emotion from "./components/EmotionModels.vue";
import Rainbow from "./components/Rainbow.vue";
import LIMBIC from "./components/LIMBIC.vue";
import Conclusion from "./components/Conclusion.vue";

export default {
  name: "App",
  components: {
    Hero,
    Corpus,
    MC,
    MCBook,
    IBM,
    IBMBook,
    Emotion,
    Rainbow,
    LIMBIC,
    Conclusion
  },
  data() {
    return {
      foo: 0,
    };
  },
};
</script>

<style lang="scss">
body {
  background: #333;
  color: #fff;
  margin: 0px;
}
#app {
  // background-image: url('./assets/background@2x.png');
  // background-size: contain;
  // background-position-y: -300px;
  // background-repeat: no-repeat;
  // height: 100vh;
  // max-width: 1200px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  margin-top: 0px;
}
</style>
