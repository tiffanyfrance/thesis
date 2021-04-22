<template>
  <div class="container lgray-container">
    <h2>Book Rendering</h2>
    <h3>
      IBM Watson
      data was used to generate the partition block visualization
      using the corpus of Pride and Prejudice. 
      This visualization was imported into Illustrator, with
      final touches and margin / typesetting done in InDesign.
    </h3>
    <div class="subcontainer vertical-center">
      <img src="@/assets/pride-and-prejudice.png" alt="Pride and Prejudice">
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
