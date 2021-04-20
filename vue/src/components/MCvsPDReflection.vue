<template>
  <div class="container white-container">
    <h2>Comparing the Results</h2>
    <!-- <h3>Stuff about Meaning Cloud.</h3> -->
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <div class="flex-50">
          <p class="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, vel. Nostrum dolorem fuga laboriosam sit nesciunt. Eos voluptate esse, iusto explicabo maxime rem, fuga rerum veniam, quisquam facilis cum. Animi.
          </p>
        </div>
        <div class="flex-50">
          <p class="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, vel. Nostrum dolorem fuga laboriosam sit nesciunt. Eos voluptate esse, iusto explicabo maxime rem, fuga rerum veniam, quisquam facilis cum. Animi.
          </p>
        </div>
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
.description {
  font-weight: 200;
  font-size: 14px;
  // width: 75%;
  max-width: 460px;
  margin: 0 auto;
  text-align: justify;
  margin-bottom: 10px;
}
</style>
