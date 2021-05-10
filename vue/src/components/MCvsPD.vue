<template>
  <div class="container white-container">
    <h2>Comparing APIs</h2>
    <h3>
      Emotion labels differ based on the model's training. For example,
      MeaningCloud identifies eight emotions based on Plutchik's Emotion Model:
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
      Below shows differences between the APIs using a streamgraph. The central,
      flowing baseline, indicates changes over time including where values start
      and stop, and the length of duration.
    </h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <p class="label">
          Select a title:
          <select v-model="book">
            <option value="alice-in-wonderland">Alice in Wonderland</option>
            <option value="frankenstein">Frankenstein</option>
            <option value="importance-of-being-ernest">
              The Importance of Being Ernest
            </option>
            <option value="pride-and-prejudice">Pride and Prejudice</option>
            <option value="through-the-looking-glass">
              Through the Looking Glass
            </option>
            <option value="wuthering-heights">Wuthering Heights</option>
          </select>
        </p>
        <div class="flex-50">
          <h4>
            API 1 <br />
            <span class="code">
              <span class="nobr"><span style="background-color: #eb3c39" class="legend-circle"></span>anger&nbsp;</span>
              <span class="nobr"><span style="background-color: #ef673c" class="legend-circle"></span>anticipation&nbsp;</span>
              <span class="nobr"><span style="background-color: #f8ec2d" class="legend-circle"></span>joy&nbsp;</span>
              <span class="nobr"><span style="background-color: #d7e489" class="legend-circle"></span>trust&nbsp;</span>
              <span class="nobr"><span style="background-color: #b5dcb7" class="legend-circle"></span>fear&nbsp;</span>
              <span class="nobr"><span style="background-color: #00b4df" class="legend-circle"></span>surprise&nbsp;</span>
              <span class="nobr"><span style="background-color: #0775ba" class="legend-circle"></span>sadness&nbsp;</span>
              <span class="nobr"><span style="background-color: #64368f" class="legend-circle"></span>disgust</span>
            </span>
          </h4>
          <VariableArea
            :filePath="filePaths[book].MC"
            :shuffle="false"
            leftAxisText="volume of emotion"
          />
        </div>
        <div class="flex-50">
          <h4>
            API 2<br />
            <span class="code">
              <span class="nobr"><span style="background-color: #eb3c39" class="legend-circle"></span>angry&nbsp;</span>
              <span class="nobr"><span style="background-color: rgb(247, 168, 59)" class="legend-circle"></span>excited&nbsp;</span>
              <span class="nobr"><span style="background-color: #f8ec2d" class="legend-circle"></span>happy&nbsp;</span>
              <span class="nobr"><span style="background-color: #b5dcb7" class="legend-circle"></span>fear&nbsp;</span>
              <span class="nobr"><span style="background-color: #0775ba" class="legend-circle"></span>sadness&nbsp;</span>
              <span class="nobr"><span style="background-color: rgb(152, 108, 155)" class="legend-circle"></span>bored</span>
            </span>
          </h4>
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
        frankenstein: {
          MC: "MC/frankenstein-simple.csv",
          PD: "PD/frankenstein-PD.csv",
        },
        "importance-of-being-ernest": {
          MC: "MC/importance-of-being-ernest-simple.csv",
          PD: "PD/importance-of-being-ernest-PD.csv",
        },
        "pride-and-prejudice": {
          MC: "MC/pride-and-prejudice-simple.csv",
          PD: "PD/pride-and-prejudice-PD.csv",
        },
        "wuthering-heights": {
          MC: "MC/wuthering-heights-simple.csv",
          PD: "PD/wuthering-heights-PD.csv",
        },
      },
      book: "alice-in-wonderland",
    };
  },
};
</script>

<style scoped lang="scss">
img {
  max-height: 70vh;
}
h4 .code {
  font-weight: normal;
}
.label {
  padding-bottom: 0;
}
</style>
