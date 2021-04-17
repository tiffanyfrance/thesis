<template>
  <div class="container white-container">
    <h2>LIMBIC Model</h2>
    <h3>
      <a href="https://github.com/glhuilli/limbic">LIMBIC</a>
      is a lexical-based emotion analysis tool developed by Gaston L'Huillier.
      It supports plain text and was trained on movie scripts and books. The
      system recognizes four emotions: sadness, joy, anger, and fear. The author
      notes that negation hasn't been solved for yet, so that the sentence "I am
      not happy" would likely be translated as "joy".
    </h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <p class="label">
          Select a Title:
          <select name="" id="">
            <option value="">Alice in Wonderland</option>
          </select>
        </p>
        <p>Viz Here</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LIMBIC",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.large-screens {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-height: 400px;
}
.description {
  font-weight: 200;
  font-size: 14px;
  width: 75%;
  max-width: 460px;
  margin: 0 auto;
  text-align: justify;
  margin-bottom: 60px;
}
</style>
