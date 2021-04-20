<template>
  <svg ref="svgContainer"></svg>
</template>

<script>
import * as d3 from "d3";

const axisCircles = 2;
const axesDomain = [
  "sadness",
  "joy",
  "analytical",
  "tentative",
  "fear",
  "anger",
  "confident",
];
const axesLength = axesDomain.length;
const angleSlice = (Math.PI * 2) / axesLength;
const maxValue = 1;
const axisLabelFactor = 1.15;
const dotRadius = 4;

export default {
  props: ["sentence", "userTones"],
  watch: {
    sentence: {
      immediate: true,
      handler() {
        if (this.sentence.tones.length) {
          this.buildArea(this.sentence.tones, "sentence-area", "#333");
        }
      },
    },
    userTones: {
      immediate: true,
      deep: true,
      handler() {
        let tones = [];

        for (let tone_id of axesDomain) {
          let score = +this.userTones[tone_id];
          if (score > 0) {
            tones.push({
              tone_id,
              score,
            });
          }
        }

        if (tones.length) {
          this.buildArea(tones, "user-area", "steelblue");
        } else if (this.container) {
          this.container.select(".user-area").remove();
        }
      },
    },
  },
  mounted() {
    this.width = this.$el.clientWidth;
    this.height = this.width;
    this.radius = 0.38 * this.width;
    this.rScale = d3
      .scaleLinear()
      .domain([0, maxValue])
      .range([0, this.radius]);

    let svg = d3
      .select(this.$refs.svgContainer)
      .attr("viewBox", [0, 0, this.width, this.height])
      .style("height", this.height)
      .style("width", this.width);

    svg.selectAll("*").remove();

    this.container = svg
      .append("g")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("transform", `translate(${this.width / 2}, ${this.height / 2})`);

    let axisGrid = this.container.append("g");

    axisGrid
      .selectAll(".levels")
      .data(d3.range(1, axisCircles + 1).reverse())
      .enter()
      .append("circle")
      .attr("class", "gridCircle")
      .attr("r", (d) => (this.radius / axisCircles) * d)
      .style("fill", "#CDCDCD")
      .style("stroke", "#CDCDCD")
      .style("fill-opacity", 0.1);

    const axis = axisGrid
      .selectAll(".axis")
      .data(axesDomain)
      .enter()
      .append("g")
      .attr("class", "axis");

    axis
      .append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr(
        "x2",
        (d, i) =>
          this.rScale(maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2)
      )
      .attr(
        "y2",
        (d, i) =>
          this.rScale(maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2)
      )
      .attr("class", "line")
      .style("stroke", "white")
      .style("stroke-width", "2px");

    axis
      .append("text")
      .attr("class", "legend")
      .style("font-size", "11px")
      .attr("text-anchor", "middle")
      .attr("font-family", "monospace")
      .attr("dy", "0.35em")
      .attr(
        "x",
        (d, i) =>
          this.rScale(maxValue * axisLabelFactor) *
          Math.cos(angleSlice * i - Math.PI / 2)
      )
      .attr(
        "y",
        (d, i) =>
          this.rScale(maxValue * axisLabelFactor) *
          Math.sin(angleSlice * i - Math.PI / 2)
      )
      .text((d) => capitalize(d));
  },
  methods: {
    buildArea(tones, className, color) {
      this.container.select("." + className).remove();

      let radarLine = d3
        .lineRadial()
        .curve(d3.curveLinearClosed)
        .radius((d) => (d === "zero" ? 0 : this.rScale(d.score)))
        .angle((d) =>
          d === "zero" ? 0 : axesDomain.indexOf(d.tone_id) * angleSlice
        );

      tones.sort(
        (a, b) => axesDomain.indexOf(b.tone_id) - axesDomain.indexOf(a.tone_id)
      );

      let polygon = tones.map((t) => {
        let r = this.rScale(t.score);
        let a = axesDomain.indexOf(t.tone_id) * angleSlice;
        return [r * Math.cos(a), r * Math.sin(a)];
      });

      if (!d3.polygonContains(polygon, [0, 0])) {
        tones.push("zero");

        let c = d3.polygonCentroid(polygon);

        tones.sort((a, b) => {
          let r1 = a === "zero" ? 0 : this.rScale(a.score);
          let angle1 =
            a === "zero" ? 0 : axesDomain.indexOf(a.tone_id) * angleSlice;
          let p1 = [r1 * Math.cos(angle1) - c[0], r1 * Math.sin(angle1) - c[1]];

          let r2 = b === "zero" ? 0 : this.rScale(b.score);
          let angle2 =
            b === "zero" ? 0 : axesDomain.indexOf(b.tone_id) * angleSlice;
          let p2 = [r2 * Math.cos(angle2) - c[0], r2 * Math.sin(angle2) - c[1]];

          return Math.atan2(p1[1], p1[0]) - Math.atan2(p2[1], p2[0]);
        });
      }

      let g = this.container
        .append("g")
        .attr("class", className)
        .attr("fill", color)
        .attr("stroke", color);

      g.append("path")
        .attr("d", radarLine(tones))
        .attr("fill-opacity", 0.1)
        .attr("stroke-width", 2);

      g.selectAll("circle")
        .data(tones.filter((t) => t !== "zero"))
        .join("circle")
        .attr("r", dotRadius)
        .attr(
          "cx",
          (d) =>
            this.rScale(d.score) *
            Math.cos(axesDomain.indexOf(d.tone_id) * angleSlice - Math.PI / 2)
        )
        .attr(
          "cy",
          (d) =>
            this.rScale(d.score) *
            Math.sin(axesDomain.indexOf(d.tone_id) * angleSlice - Math.PI / 2)
        )
        .style("fill-opacity", 1);
    },
  },
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<style scoped>
svg {
  width: 100%;
}
</style>
