<template>
  <div class="container white-container">
    <h2>Meaning Cloud vs Parallel Dots</h2>
    <h3>Stuff about Meaning Cloud.</h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <p class="label">
          Select a title:
          <select v-model="book" name="" id="">
            <option value="MC/alice-in-wonderland-simple.csv">
              Alice in Wonderland
            </option>
            <option value="MC/through-the-looking-glass.csv">
              Through the Looking Glass
            </option>
          </select>
        </p>
        <div class="flex-50">
          <VariableArea :filePath="book" />
        </div>
        <div class="flex-50">
          <VariableArea :filePath="book" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VariableArea from "./charts/VariableArea.vue";

export default {
  name: "MCvsPD",
  components: { VariableArea },
  props: {
    msg: String,
  },
  data() {
    return {
      book: "MC/alice-in-wonderland-simple.csv",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  max-height: 70vh;
}
</style>
