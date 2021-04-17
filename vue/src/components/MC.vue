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
      <VariableArea />
      <!-- <img src="@/assets/svgs/ibm/alice.svg" alt="" /> -->
    </div>
  </div>
</template>

<script>
import VariableArea from "./charts/VariableArea.vue";

export default {
  components: { VariableArea },
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
