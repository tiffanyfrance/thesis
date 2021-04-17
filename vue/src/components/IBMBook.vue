<template>
  <div class="container white-container">
    <h2>Book Rendering</h2>
    <h3>
      IBMBook Watson Suite Tone Analyzer evaluates emotions based on sentence level,
      up to the first 100 sentences in a document.
    </h3>
    <div class="subcontainer vertical-center">
      Image goes here
    </div>
  </div>
</template>

<script>
export default {
  name: "IBMBook",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  max-height: 70vh;
}
</style>
