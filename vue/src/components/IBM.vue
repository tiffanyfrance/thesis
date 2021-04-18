<template>
  <div class="container white-container">
    <h2>IBM Watson Tone Analyzer (Sentence Level)</h2>
    <h3>
      IBM Watson Suite Tone Analyzer evaluates emotions based on sentence level,
      up to the first 100 sentences in a document.
    </h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <p>
          <select v-model="book" name="" id="">
            <option value="IBM/alice-in-wonderland-TA.json">Alice in Wonderland</option>
            <option value="IBM/through-the-looking-glass-TA.json">Through the Looking-Glass</option>
            <option value="IBM/wuthering-heights-TA.json">Wuthering Heights</option>
          </select>
        </p>
        <Stacks :filePath="book" />
      </div>
    </div>
  </div>
</template>

<script>
import Stacks from "./charts/Stacks.vue";
export default {
  components: { Stacks },
  name: "IBM",
  props: {
    msg: String,
  },
  data() {
    return {
      book: "IBM/alice-in-wonderland-TA.json",
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
