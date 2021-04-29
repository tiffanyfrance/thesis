<template>
  <p class="gradient no-margin-top" ref="p">&nbsp;</p>
  <div class="text">
    <p class="no-margin-top">
      Analytical<br /><span class="thin">{{
        tones.analytical.percentage
      }}</span>
    </p>
    <p>
      Sadness<br /><span class="thin">{{ tones.sadness.percentage }}</span>
    </p>
    <p>
      Fear<br /><span class="thin">{{ tones.fear.percentage }}</span>
    </p>
    <p>
      Confident<br /><span class="thin">{{ tones.confident.percentage }}</span>
    </p>
    <p>
      Joy<br /><span class="thin">{{ tones.joy.percentage }}</span>
    </p>
    <p>
      Tentative<br /><span class="thin">{{ tones.tentative.percentage }}</span>
    </p>
    <p>
      Anger<br /><span class="thin">{{ tones.anger.percentage }}</span>
    </p>
  </div>
</template>

<script>
import * as d3 from "d3";

const order = [
  "analytical",
  "sadness",
  "fear",
  "confident",
  "joy",
  "tentative",
  "anger",
];

const colors = {
  analytical: "#64368f",
  sadness: "#00b4df",
  fear: "#b5dcb7",
  confident: "#d7e489",
  joy: "#f8ec2d",
  tentative: "#ef673c",
  anger: "#eb3c39",
};

export default {
  props: ["filePath"],
  watch: {
    filePath: {
      immediate: true,
      async handler(val) {
        this.data = await d3.json("/data/" + val);
        this.buildChart();
      },
    },
  },
  data() {
    return {
      tones: emptyTones(),
    };
  },
  methods: {
    buildChart() {
      let results = [];

      for (let chap of this.data) {
        for (let tone of chap.document_tone.tones) {
          let inArr = results.find(function (element) {
            return element["emotion"] === tone.tone_id;
          });

          if (inArr) {
            // results[].score += tone.score;
            // console.log(tone.tone_id)
            inArr["score"] += tone.score;
          } else {
            let newObj = {};
            newObj.emotion = tone.tone_id;
            newObj.score = tone.score;

            results.push(newObj);
          }
        }
      }

      let overallScore = 0;

      for (let r of results) {
        overallScore += r.score;
      }

      this.tones = emptyTones();

      for (let r of results) {
        r.score = r.score / overallScore;
        r.percentage = parseFloat(r.score * 100).toFixed(2) + "%";
        this.tones[r.emotion] = r;
      }

      let str = "linear-gradient(";
      str += "120deg, ";

      let sum = 0;
      let isFirst = true;

      for (let emotion of order) {
        let r = this.tones[emotion];

        if (r.score > 0.01) {
          sum += r.score;

          if (isFirst) {
            isFirst = false;
          } else {
            str += ", ";
          }

          str += `${colors[emotion]} ${parseFloat(sum * 100).toFixed(2) + "%"}`;
        }
      }

      str += ")";

      d3.select(this.$refs.p).style("background", str);
    },
  },
};

function emptyTones() {
  return {
    sadness: {
      emotion: "sadness",
      percentage: "0%",
    },
    joy: {
      emotion: "joy",
      percentage: "0%",
    },
    analytical: {
      emotion: "analytical",
      percentage: "0%",
    },
    tentative: {
      emotion: "tentative",
      percentage: "0%",
    },
    fear: {
      emotion: "fear",
      percentage: "0%",
    },
    confident: {
      emotion: "confident",
      percentage: "0%",
    },
    anger: {
      emotion: "anger",
      percentage: "0%",
    },
  };
}
</script>

<style scoped>
.gradient {
  width: calc(100% - 70px);
  height: calc(100vh - 320px);
  background: linear-gradient(
    120deg,
    #64368f 10.36%,
    #00b4df 34.44%,
    #b5dcb7 45.27%,
    #f8ec2d 77.75%,
    #ef673c 89.58%,
    #eb3c39 100%
  );
  float: left;
}
span.thin {
  font-weight: 200;
  color: #999;
}
.text {
  float: left;
  padding-left: 10px;
  text-align: left;
}
p, span {
    font-size: 12px;
}
</style>
