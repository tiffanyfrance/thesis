
<template>
  <div class="container">
  </div>
</template>

<script>
export default {
  name: "Final",
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
.description {
  font-weight: 200;
  font-size: 14px;
  width: 75%;
  max-width: 460px;
  margin: 0 auto;
  text-align: justify;
  margin-bottom: 10px;
}
.container {
  background-image: url(./assets/bookshelf.png)
}
</style>
