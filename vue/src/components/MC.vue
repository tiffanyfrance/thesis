<template>
  <div class="container white-container">
    <h2>Meaning Cloud</h2>
    <h3>Stuff about Meaning Cloud.</h3>
    <div class="subcontainer vertical-center flex-container">
      <p>
        <select name="" id="">
          <option value="">Alice in Wonderland</option>
        </select>
      </p>
      <img src="@/assets/svgs/ibm/alice.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MC",
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
