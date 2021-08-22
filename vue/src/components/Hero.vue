<template>
  <div id="hero" class="container">
    <div class="vertical-center">
      <h1>Literary Book Cover Production<br />
          Based on Emotion Classification Models</h1>
      <p>
        Using NLP Models to Produce Emotion Labeled Data for Visualizing Book
        Cover Art
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#hero.container {
  height: 100vh;
  .vertical-center {
    top: 45%;
  }
}
</style>
