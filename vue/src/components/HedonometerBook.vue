<template>
  <div class="container">
    <h2>Hedonometer Book Rendering</h2>
    <h3>
      The psychoanalytic field lacks an official consensus on how to categorize
      human emotions, however data scientists often use the schemas based on the
      work of several prominent researchers, including Plutchik, Ekman, Parrot,
      Tomkins, and Wilcox. The following models also contain color-emotion
      assignment which are used in this project.
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
