<template>
  <div class="container">
    <h2>Book Rendering</h2>
    <h3>
      Once the Illustrator script was imported with the appropriate
      <span class="code">ramp-value</span>, I applied the new gradient swatch to
      the background of the book cover. I also added some texture and a title in
      Futura typeface.
    </h3>
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
  max-height: 600px;
}
.book-cover {
  text-align: left;
}
</style>
