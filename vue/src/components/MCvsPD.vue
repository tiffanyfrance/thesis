<template>
  <div class="container white-container">
    <h2>Meaning Cloud vs Parallel Dots</h2>
    <h3>Stuff about Meaning Cloud.</h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <p class="label">
          Select a title:
          <select v-model="book">
            <option value="alice-in-wonderland">Alice in Wonderland</option>
            <option value="through-the-looking-glass">
              Through the Looking Glass
            </option>
          </select>
        </p>
        <div class="flex-50">
          <VariableArea :filePath="filePaths[book].MC" :shuffle="false" />
        </div>
        <div class="flex-50">
          <VariableArea :filePath="filePaths[book].PD" :shuffle="false" />
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
      filePaths: {
        "alice-in-wonderland": {
          MC: "MC/alice-in-wonderland-simple.csv",
          PD: "PD/alice-in-wonderland-PD.csv",
        },
        "through-the-looking-glass": {
          MC: "MC/through-the-looking-glass.csv",
          PD: "PD/through-the-looking-glass-PD.csv",
        },
      },
      book: "alice-in-wonderland",
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
