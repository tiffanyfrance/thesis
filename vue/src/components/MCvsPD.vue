<template>
  <div class="container white-container">
    <h2>Comparing APIs</h2>
    <h3>
      MeaningCloud and ParallelDots APIs return similiar emotion labels.
      MeaningCloud identifies eight emotions:
      <span class="code">
        [<span style="color: #eb3c39">anger</span>,
        <span style="color: #ef673c">anticipation</span>,
        <span style="color: #f8ec2d">joy</span>,
        <span style="color: #d7e489">trust</span>,
        <span style="color: #b5dcb7">fear</span>,
        <span style="color: #00b4df">surprise</span>,
        <span style="color: #0775ba">sadness</span>,
        <span style="color: #64368f">disgust</span>].
      </span>
      ParallelDots uses six basic emotions:
      <span class="code">
        [<span style="color: #eb3c39">angry</span>,
        <span style="color: rgb(247, 168, 59)">excited</span>,
        <span style="color: #f8ec2d">happy</span>,
        <span style="color: #b5dcb7">fear</span>,
        <span style="color: #0775ba">sadness</span>,
        <span style="color: rgb(152, 108, 155)">bored</span>].
      </span>
      Below shows differences between the APIs using a streamgraph.
      The central, flowing baseline, indicates changes over time 
      including where values start and stop, and the length
      of duration.
    </h3>
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
          <h4>API 1: MeaningCloud</h4>
          <VariableArea
            :filePath="filePaths[book].MC"
            :shuffle="false"
            leftAxisText="volume of emotion"
          />
        </div>
        <div class="flex-50">
          <h4>API 2: ParallelDots</h4>
          <VariableArea
            :filePath="filePaths[book].PD"
            :shuffle="false"
            leftAxisText="volume of emotion"
          />
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
.code span {
  
}
</style>
