<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <Hero />
  <Corpus />
  <IBM />
  <Makalaka />
</template>

<script>
import Hero from "./components/Hero.vue";
import Corpus from "./components/Corpus.vue";
import IBM from "./components/IBM.vue";
import Makalaka from "./components/Makalaka.vue";

export default {
  name: "App",
  components: {
    Hero,
    Corpus,
    IBM,
    Makalaka
  },
  data() {
    return {
      foo: 0
    }
  }
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
