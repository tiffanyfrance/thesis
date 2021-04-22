<template>
  <div class="container white-container">
    <h2>Variable Line Chart</h2>
    <h3>
      MeaningCloud is an analytic company offering a number of learning tools
      for evaluating text. Their premium package "Deep Categorization" includes
      an API which reviews a given corpus for emotion detection classification.
      The product uses Plutchik’s Wheel of Emotion, with eight primary bipolar
      emotion labels:
      <span class="code">
        [joy/sadness, anger/fear, trust/disgust, surprise/anticipation]</span
      >
    </h3>
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
            <option value="MC/wuthering-heights-simple.csv">
              Wuthering Heights
            </option>
            <option value="MC/anna-karenina-simple.csv">Anna Karenina</option>
          </select>
        </p>
        <VariableArea
          :filePath="book"
          :shuffle="true"
          leftAxisText="rank of emotion strength"
          :leftAxisArrow="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VariableArea from "./charts/VariableArea.vue";

export default {
  name: "MC",
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
