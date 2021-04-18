<template>
  <div class="container white-container">
    <h2>Hedonometer</h2>
    <h3>
      The psychoanalytic field lacks an official consensus on how to categorize
      human emotions, however data scientists often use the schemas based on the
      work of several prominent researchers, including Plutchik, Ekman, Parrot,
      Tomkins, and Wilcox. The following models also contain color-emotion
      assignment which are used in this project.
    </h3>
    <div class="subcontainer vertical-center">
      <div class="large-screens">
        <p>
          <select v-model="book" name="" id="">
            <option value="Hedonometer/alice-in-wonderland-hedonometer.json">
              Alice in Wonderland
            </option>
          </select>
        </p>
        <Bubbles :filePath="book" />
      </div>
    </div>
  </div>
</template>

<script>
import Bubbles from "./charts/Bubbles.vue";
export default {
  components: { Bubbles },
  name: "Hedonometer",
  props: {
    msg: String,
  },
  data() {
    return {
      book: "Hedonometer/alice-in-wonderland-hedonometer.json",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.large-screens {
  max-width: 1400px;
  margin: 0 auto;
}
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
