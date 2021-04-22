<template>
  <div class="container">
    <h2>Book Rendering</h2>
    <h3>
      Below is a version of The War of the Worlds book cover
      using the Hedonometer-Based dot chart. The colors are 
      used, not for emotion labeling, but for intensity clustering
      of sentiment values. A geometric-based font was used 
      to fit with the genre of the book.
    </h3>
    <div class="subcontainer vertical-center">
      <img src="@/assets/war-of-worlds.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "HedonometerBook",
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
  max-height: 60vh;
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
