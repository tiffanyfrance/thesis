<template>
  <svg ref="svgContainer"></svg>
</template>

<script>
import * as d3 from "d3";

const colors = {
  sadness: d3.interpolateLab("#deebf7", "#9ecae1", "#3182bd"), // Blue
  joy: d3.interpolateLab("#ffffc8", "#ffff92", "#ffff5a"), // Yellow
  analytical: d3.interpolateLab("#efedf5", "#bcbddc", "#756bb1"), // Purple
  tentative: d3.interpolateLab("#fee6ce", "#fdae6b", "#e6550d"), // Orange
  fear: d3.interpolateLab("#a1d99b", "#A0CE69", "#C4F47F"), // Dark Green
  anger: d3.interpolateLab("#fee0d2", "#fc9272", "#de2d26"), // Red
  confident: d3.interpolateLab("#ffffc8", "#A0D568", "#ffff5a"), // Green
  none: d3.interpolateLab("white"),
  //"#f0f0f0","#bdbdbd","#636363" Grey
};

const order = {
  analytical: 1,
  sadness: 2,
  fear: 3,
  confident: 4,
  joy: 5,
  tentative: 6,
  anger: 7,
  none: 8,
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
  mounted() {
    this.width = this.$el.clientWidth;
  },
  methods: {
    buildChart() {
      const width = this.width;
      const height = 650;
      const spacing = 1;
      const halfSpacing = spacing / 2;
      const margin = { top: 10, right: 10, bottom: 50, left: 10 };
      const data = this.data;

      let scoreRange = {
        sadness: {
          min: Infinity,
          max: -Infinity,
        },
        joy: {
          min: Infinity,
          max: -Infinity,
        },
        analytical: {
          min: Infinity,
          max: -Infinity,
        },
        tentative: {
          min: Infinity,
          max: -Infinity,
        },
        fear: {
          min: Infinity,
          max: -Infinity,
        },
        anger: {
          min: Infinity,
          max: -Infinity,
        },
        confident: {
          min: Infinity,
          max: -Infinity,
        },
        none: {
          min: Infinity,
          max: -Infinity,
        },
      };

      for (let d1 of data) {
        for (let d2 of d1.sentences_tone) {
          if (d2.tones.length) {
            let toneId = d2.tones[0].tone_id;
            let score = d2.tones[0].score;

            for (let t of d2.tones) {
              if (t.score > score) {
                toneId = t.tone_id;
                score = t.score;
              }
            }

            d2.toneId = toneId;
            d2.score = score;
          } else {
            d2.toneId = "none";
            d2.score = 0.5;
          }

          if (d2.score < scoreRange[d2.toneId].min) {
            scoreRange[d2.toneId].min = d2.score;
          }

          if (d2.score > scoreRange[d2.toneId].max) {
            scoreRange[d2.toneId].max = d2.score;
          }
        }

        d1.sentences_tone.sort((a, b) => {
          let diff = order[b.toneId] - order[a.toneId];

          if (diff === 0) {
            diff = a.score - b.score;
          }

          return diff;
        });
      }

      let svg = d3
        .select(this.$refs.svgContainer)
        .attr("viewBox", [0, 0, width, height])
        .style("height", height)
        .style("width", width);

      svg.selectAll("*").remove();

      const sentenceWidth = (width - margin.left - margin.right) / data.length;
      const innerHeight = height - margin.top - margin.bottom;

      let chapters = svg
        .style("font-size", "12px")
        .append("g")
        .selectAll("g")
        .data(data)
        .join("g")
        .attr("id", (d, i) => `chapter-${i}`)
        .attr("transform", (d, i) => {
          let x = margin.left + halfSpacing + i * sentenceWidth;
          let y = margin.top + halfSpacing;
          return `translate(${x}, ${y})`;
        });

      chapters
        .append("text")
        .attr("x", sentenceWidth / 2)
        .attr("y", innerHeight + margin.bottom / 2)
        .style("text-anchor", "middle")
        .text((d, i) => (data.length < 100 || (i + 1) % 5 === 0 ? i + 1 : ""));

      chapters
        .selectAll("rect")
        .data((d) => d.sentences_tone)
        .join("rect")
        .attr("id", (d, i) => `sentence-${i}`)
        .attr("order", (d) => d.toneId)
        .attr("x", 0)
        .attr("y", (d, i, data) => i * (innerHeight / data.length))
        .attr("width", sentenceWidth - spacing)
        .attr("height", (d, i, data) => innerHeight / data.length - spacing)
        .style("fill", (d) => {
          let t =
            (d.score - scoreRange[d.toneId].min) /
            (scoreRange[d.toneId].max - scoreRange[d.toneId].min);
          return d3.rgb(colors[d.toneId](t)).hex();
        });
    },
  },
};
</script>

<style scoped>
svg {
  width: 100%;
}
</style>
