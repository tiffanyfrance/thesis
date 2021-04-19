<template>
  <div class="container white-container">
    <h2>About the Data</h2>
    <div class="subcontainer vertical-center">
      <div class="large-screens">
        <div class="code-snippet">
          <!-- don't autoformat - formatting of code in this doc is important -->
          <pre>
          <code class="html code">
      [{
          "id": 5230,
          "novel": "The Invisible Man",
          "author": "H.G. Wells",
          "pub": 1897
      },
      {
          "id": 12573,
          "novel": "Rock Crystal",
          "author": "Adalbert Stifter",
          "pub": 1845
      },
      {
          "id": 23997,
          "novel": "Eugene Onegin",
          "author": "Alexander Pushkin",
          "pub": 1833
      }...]
          </code>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Corpus",
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
.code-snippet {
  max-width: 400px;
}
</style>
