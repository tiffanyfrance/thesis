<template>
  <svg ref="svgContainer"></svg>
</template>

<script>
import * as d3 from "d3";

const margin = { top: 20, right: 10, bottom: 80, left: 40 };

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
        .style("font-size", "12px")
        .style("height", height)
        .style("width", width);

      svg.selectAll("*").remove();

      buildCircles(
        svg,
        topData,
        deltaX,
        topY,
        true,
        d3.interpolateHsl("green", "blue")
      );

      buildCircles(
        svg,
        bottomData,
        deltaX,
        bottomY,
        false,
        d3.interpolateHsl("red", "yellow")
      );

      svg
        .append("g")
        .selectAll("text")
        .data(data)
        .join("text")
        .attr("x", (d, i) => margin.left + deltaX / 2 + i * deltaX)
        .attr("y", height - margin.bottom / 2)
        .style("text-anchor", "middle")
        .style("fill", "#333")
        .text((d, i) => i + 1);
    },
  },
};

function buildCircles(svg, data, deltaX, y, isUpArrow, color) {
  let x = margin.left + deltaX / 2;

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

    let lineGroup = svg
      .append("g")
      .style("stroke-width", 1)
      .style("stroke", "#999")
      .style("fill", "none");

    lineGroup
      .append("line")
      .attr("x1", margin.left / 2)
      .attr("y1", y.range()[1])
      .attr("x2", margin.left / 2)
      .attr("y2", y.range()[0]);

    if (isUpArrow) {
      lineGroup
        .append("line")
        .attr("x1", margin.left / 2)
        .attr("y1", y.range()[1])
        .attr("x2", margin.left / 2 - 7)
        .attr("y2", y.range()[1] + 7);

      lineGroup
        .append("line")
        .attr("x1", margin.left / 2)
        .attr("y1", y.range()[1])
        .attr("x2", margin.left / 2 + 7)
        .attr("y2", y.range()[1] + 7);

      let midPoint = (y.range()[0] + y.range()[1]) / 2;

      let textGroup = svg.append("g");

      textGroup
        .append("text")
        .attr("dy", "0.25em")
        .style(
          "transform",
          `translate(${margin.left / 2}px, ${midPoint}px) rotate(-90deg)`
        )
        .style("text-anchor", "middle")
        .text("greater than 7");

      let textBBox = textGroup.select("text").node().getBBox();

      textGroup
        .insert("rect", "text")
        .style(
          "transform",
          `translate(${margin.left / 2}px, ${midPoint}px) rotate(-90deg)`
        )
        .attr("x", textBBox.x - 10)
        .attr("y", textBBox.y)
        .attr("width", textBBox.width + 20)
        .attr("height", textBBox.height)
        .attr("fill", "white");
    } else {
      lineGroup
        .append("line")
        .attr("x1", margin.left / 2)
        .attr("y1", y.range()[0])
        .attr("x2", margin.left / 2 - 7)
        .attr("y2", y.range()[0] - 7);

      lineGroup
        .append("line")
        .attr("x1", margin.left / 2)
        .attr("y1", y.range()[0])
        .attr("x2", margin.left / 2 + 7)
        .attr("y2", y.range()[0] - 7);

      let midPoint = (y.range()[0] + y.range()[1]) / 2;

      let textGroup = svg.append("g");

      textGroup
        .append("text")
        .attr("dy", "0.25em")
        .style(
          "transform",
          `translate(${margin.left / 2}px, ${midPoint}px) rotate(-90deg)`
        )
        .style("text-anchor", "middle")
        .text("less than 3");

      let textBBox = textGroup.select("text").node().getBBox();

      textGroup
        .insert("rect", "text")
        .style(
          "transform",
          `translate(${margin.left / 2}px, ${midPoint}px) rotate(-90deg)`
        )
        .attr("x", textBBox.x - 10)
        .attr("y", textBBox.y)
        .attr("width", textBBox.width + 20)
        .attr("height", textBBox.height)
        .attr("fill", "white");
    }
  }
}
</script>

<style scoped>
svg {
  width: 100%;
  /* background: #333; */
}
</style>
