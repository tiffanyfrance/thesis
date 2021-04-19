<template>
  <svg ref="svgContainer"></svg>
</template>

<script>
import * as d3 from "d3";

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
      const height = 600;
      const margin = { top: 20, right: 10, bottom: 80, left: 10 };
      const middlePercent = 0.1;
      const halfMiddleSize = (height * middlePercent) / 2;

      const data = this.data;

      const bottomData = data.map((d) =>
        d.filter((d2) => d2["Happiness Score"] < 5)
      );

      const topData = data.map((d) =>
        d.filter((d2) => d2["Happiness Score"] >= 5)
      );

      const bottomY = d3
        .scaleLinear()
        .domain(d3.extent(bottomData.flat(), (d) => d["Happiness Score"]))
        .range([height - margin.bottom, height / 2 + halfMiddleSize]);

      const topY = d3
        .scaleLinear()
        .domain(d3.extent(topData.flat(), (d) => d["Happiness Score"]))
        .range([height / 2 - halfMiddleSize, margin.top]);

      const deltaX = (width - margin.left - margin.right) / data.length;

      let svg = d3
        .select(this.$refs.svgContainer)
        .attr("viewBox", [0, 0, width, height])
        .style("height", height)
        .style("width", width);

      svg.selectAll("*").remove();

      buildCircles(
        svg,
        topData,
        deltaX,
        topY,
        d3.interpolateHsl("green", "blue")
      );

      buildCircles(
        svg,
        bottomData,
        deltaX,
        bottomY,
        d3.interpolateHsl("red", "yellow")
      );

      svg
        .append("g")
        .selectAll("text")
        .data(data)
        .join("text")
        .attr("x", (d, i) => deltaX / 2 + i * deltaX)
        .attr("y", height - margin.bottom / 2)
        .style("text-anchor", "middle")
        .style("fill", "#333")
        .text((d, i) => i + 1);
    },
  },
};

function buildCircles(svg, data, deltaX, y, color) {
  let x = deltaX / 2;

  for (let i = 0; i < data.length; i++) {
    svg
      .append("g")
      .selectAll("circle")
      .data(data[i])
      .join("circle")
      .attr("cx", x)
      .attr("cy", (d) => y(d["Happiness Score"]))
      .attr("r", 3)
      .style("opacity", 0.2)
      .attr("fill", (d) => {
        let t =
          (d["Happiness Score"] - y.domain()[0]) /
          (y.domain()[1] - y.domain()[0]);
        return color(t);
      })
      .append("title")
      .text((d) => d["Word"]);

    x += deltaX;
  }
}
</script>

<style scoped>
svg {
  width: 100%;
  /* background: #333; */
}
</style>
