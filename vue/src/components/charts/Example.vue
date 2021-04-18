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
        this.data = await d3.csv("/data/" + val);
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
      // const margin = { top: 0, right: 20, bottom: 30, left: 20 };
      // const data = this.data;

      let svg = d3
        .select(this.$refs.svgContainer)
        .attr("viewBox", [0, 0, width, height])
        .style("height", height)
        .style("width", width);

      svg.selectAll("*").remove();
    },
  },
};
</script>

<style scoped>
svg {
  width: 100%;
}
</style>