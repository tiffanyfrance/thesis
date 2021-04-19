<template>
  <div class="container white-container">
    <h2>Comparing the Results</h2>
    <h3>Stuff about Meaning Cloud.</h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <div class="flex-50"></div>
        <div class="flex-50"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MCvsPDReflections",
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
