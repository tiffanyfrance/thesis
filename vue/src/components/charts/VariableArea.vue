<template>
  <svg ref="svgContainer"></svg>
</template>

<script>
import * as d3 from "d3";

const MCKeys = [
  "anger",
  "anticipation",
  "joy",
  "trust",
  "fear",
  "surprise",
  "sadness",
  "disgust",
].reverse();

const PDKeys = ["Angry", "Excited", "Happy", "Fear", "Sad", "Bored"].reverse();

const colorMap = {
  trust: "#abdda4",
  joy: "#fee08b",
  anticipation: "#fdae61",
  sadness: "#3288bd",
  disgust: "#DB95D2",
  surprise: "#66AADD",
  fear: "#66c2a5",
  anger: "#d53e4f",
  // Bored: "#DB95D2", //change?
  Bored: "#986c9b",
  Happy: "#fee08b",
  // Excited: "#66AADD", //change?
  Excited: "#f7a83b",
  Angry: "#d53e4f",
  Fear: "#66c2a5",
  Sad: "#3288bd",
};

export default {
  props: ["filePath", "shuffle", "leftAxisText", "leftAxisArrow"],
  watch: {
    filePath: {
      immediate: true,
      async handler(val) {
        this.data = await d3.csv("/data/" + val);
        this.keys = this.data.columns.includes("trust") ? MCKeys : PDKeys;
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
      const height = 500;
      const margin = { top: 0, right: 20, bottom: 60, left: 40 };
      const data = this.data;

      let series = d3.stack().keys(this.keys).offset(d3.stackOffsetWiggle)(
        data
      );
      // .offset(d3.stackOffsetWiggle)
      // .order(d3.stackOrderInsideOut)(data);

      if (this.shuffle) {
        for (let i = 0; i < series[0].length; i++) {
          let start = Infinity;
          let arr = [];

          for (let j = 0; j < series.length; j++) {
            let d = series[j];

            arr.push({
              j,
              amount: d[i][1] - d[i][0],
            });

            if (d[i][0] < start) {
              start = d[i][0];
            }
          }

          arr.sort((a, b) => a.amount - b.amount);

          for (let obj of arr) {
            series[obj.j][i][0] = start;
            series[obj.j][i][1] = start + obj.amount;

            start += obj.amount;
          }
        }
      }

      let chapters = data.map((d) => d.chapter);

      let area = d3
        .area()
        .curve(d3.curveBasis)
        .x((d) => x(d.data.chapter))
        .y0((d) => y(d[0]))
        .y1((d) => y(d[1]));

      let x = d3
        .scaleLinear()
        .domain(d3.extent(data, (d) => +d.chapter))
        .range([margin.left, width - margin.right]);

      let y = d3
        .scaleLinear()
        .domain([
          d3.min(series, (d) => d3.min(d, (d) => d[0])),
          d3.max(series, (d) => d3.max(d, (d) => d[1])),
        ])
        .range([height - margin.bottom, margin.top]);

      let xAxis = (g) =>
        g
          .attr("transform", `translate(0,${height - margin.bottom})`)
          .call(d3.axisBottom(x).tickSize(0))
          .call((g) => g.select(".domain").remove());

      let color = d3
        .scaleOrdinal()
        .domain(Object.keys(colorMap))
        .range(Object.values(colorMap));

      let svg = d3
        .select(this.$refs.svgContainer)
        .attr("viewBox", [0, 0, width, height])
        .style("height", height)
        .style("width", width);

      svg.selectAll("*").remove();

      svg
        .append("g")
        .selectAll("line")
        .data(chapters)
        .join("line")
        .attr("x1", (d) => x(d))
        .attr("y1", 0)
        .attr("x2", (d) => x(d))
        .attr("y2", height - margin.top - margin.bottom)
        .style("stroke-width", 0.5)
        .style("stroke", "#ccc")
        .style("fill", "none");

      svg
        .append("g")
        .selectAll("path")
        .data(series)
        .join("path")
        .attr("fill", ({ key }) => color(key))
        .attr("opacity", 0.9)
        .attr("d", area)
        .append("title")
        .text(({ key }) => key.toLowerCase());

      svg.append("g").call(xAxis);

      let leftAxis = svg
        .append("g")
        .attr("transform", `translate(${margin.left / 2},0)`);

      if (this.leftAxisArrow) {
        let lineGroup = leftAxis
          .append("g")
          .style("stroke-width", 1)
          .style("stroke", "#999")
          .style("fill", "none");

        lineGroup
          .append("line")
          .attr("x1", 0)
          .attr("y1", margin.top)
          .attr("x2", 0)
          .attr("y2", height - margin.bottom);

        lineGroup
          .append("line")
          .attr("x1", 0)
          .attr("y1", margin.top)
          .attr("x2", -7)
          .attr("y2", margin.top + 7);

        lineGroup
          .append("line")
          .attr("x1", 0)
          .attr("y1", margin.top)
          .attr("x2", 7)
          .attr("y2", margin.top + 7);
      }

      leftAxis
        .append("text")
        .attr("dy", "0.25em")
        .style("transform", "translate(0, 210px) rotate(-90deg)")
        .style("text-anchor", "middle")
        .style("font-size", "12px")
        .text(this.leftAxisText);

      let textBBox = leftAxis.select("text").node().getBBox();

      leftAxis
        .insert("rect", "text")
        .style("transform", "translate(0, 210px) rotate(-90deg)")
        .attr("x", textBBox.x - 10)
        .attr("y", textBBox.y)
        .attr("width", textBBox.width + 20)
        .attr("height", textBBox.height)
        .attr("fill", "white");

      svg
        .append("text")
        .attr("x", margin.left + (width - margin.left - margin.right) / 2)
        .attr("y", height - 25)
        .style("text-anchor", "middle")
        .style("font-size", "12px")
        .text("chapters");
    },
  },
};
</script>

<style scoped>
svg {
  width: 100%;
}
</style>
