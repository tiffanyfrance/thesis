<template>
  <div class="container white-container">
    <h2>Variable Line Chart</h2>
    <h3>
      Variable line charts work by showing the intensity of an emotion within
      the line - the thicker the line, the stronger the value. Additionally, the
      <span class="code"> y-axis</span> ranks the lines by instensity so that
      the strongest emotion rises to the top. The data was gathered using
      MeaningCloud's Deep Categoriztion API, which return eight primary emotion
      labels found in Plutchik’s Wheel of Emotion:
      <span class="code">
        [<span style="color: #eb3c39">anger</span>,
        <span style="color: #ef673c">anticipation</span>,
        <span style="color: #f8ec2d">joy</span>,
        <span style="color: #d7e489">trust</span>,
        <span style="color: #b5dcb7">fear</span>,
        <span style="color: #00b4df">surprise</span>,
        <span style="color: #0775ba">sadness</span>,
        <span style="color: #64368f">disgust</span>]
      </span>
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
// .code span {
//   font-weight: 500;
//   text-transform: uppercase;
// }
</style>
