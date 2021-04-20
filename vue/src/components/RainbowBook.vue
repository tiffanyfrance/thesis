<template>
  <div class="container">
    <h2>Book Rendering</h2>
    <h3>IBM Watson Tone Analyzer (Document Level)</h3>
    <div class="subcontainer vertical-center flex-container">
      <img src="@/assets/frankenstein.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RainbowBook",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  max-height: 620px;
}
.book-cover {
  text-align: left;
}
</style>
