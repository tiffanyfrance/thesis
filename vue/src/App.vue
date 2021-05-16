<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <Hero />
  <MC />
  <MCBook />
  <MCvsPD />
  <Emotion />
  <Rainbow />
  <RainbowBook />
  <IBM />
  <IBMBook />
  <Hedonometer />
  <HedonometerBook />
  <Compare />
  <Conclusion />
  <Corpus />
  <!-- <APIs /> -->
  <!-- <MCvsPDReflection /> -->
  <!-- <Final /> -->
</template>

<script>
import Hero from "./components/Hero.vue";
import Corpus from "./components/Corpus.vue";
// import APIs from "./components/APIs.vue";
import MC from "./components/MC.vue";
import MCBook from "./components/MCBook.vue";
import MCvsPD from "./components/MCvsPD.vue";
// import MCvsPDReflection from "./components/MCvsPDReflection.vue";
import IBM from "./components/IBM.vue";
import IBMBook from "./components/IBMBook.vue";
import Rainbow from "./components/Rainbow.vue";
import RainbowBook from "./components/RainbowBook.vue";
import Hedonometer from "./components/Hedonometer.vue";
import HedonometerBook from "./components/HedonometerBook.vue";
import Compare from "./components/Compare.vue";
import Conclusion from "./components/Conclusion.vue";
import Emotion from "./components/EmotionModels.vue";
// import Final from "./components/Final.vue";

export default {
  name: "App",
  components: {
    Hero,
    MC,
    MCBook,
    MCvsPD,
    // MCvsPDReflection,
    IBM,
    IBMBook,
    Rainbow,
    RainbowBook,
    Hedonometer,
    HedonometerBook,
    Compare,
    Conclusion,
    Corpus,
    Emotion,
    // APIs,
    // Final,
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
  width: 100%;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
}
</style>
