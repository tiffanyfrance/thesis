<template>
  <div class="container">
    <h2>Meaning Cloud Book Rendering</h2>
    <h3>
      This book cover was created using the rendering of the visualization in
      the variable line chart mentioned above. The design was laid out using
      Illustrator and InDesign according to required dimensions for a 5.5 x 8.5
      book binding, including bleeds and margins for printing.
    </h3>
    <div class="subcontainer vertical-center">
      <img src="@/assets/preview.png" alt="Alice in Wonderland Preview" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MCBook",
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
