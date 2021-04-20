<template>
  <div class="container lgray-container">
    <h2>Compare</h2>
    <h3>
      Lorem ipsum
    </h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <div class="flex-50">
          <h4>Select</h4>
          <p class="description">
            foo
          </p>
          <p></p>
        </div>
        <div class="flex-50">
          <h4>Viz</h4>
          <p class="description">
            foo
          </p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Compare",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  max-height: 400px;
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
