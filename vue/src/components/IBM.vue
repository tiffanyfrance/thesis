<template>
  <div class="container white-container">
    <h2>IBM Watson Sentence Level</h2>
    <h3>
      IBM Watson Suite Tone Analyzer evaluates emotions based on sentence level,
      up to the first 100 sentences in a document.
    </h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="flex-50">
        <p>
          <select name="" id="">
            <option value="">Alice in Wonderland</option>
          </select>
        </p>
        <img src="@/assets/svgs/ibm/alice.svg" alt="" />
      </div>
      <div class="flex-50">
        <p>
          <select name="" id="">
            <option value="">Alice in Wonderland</option>
          </select>
        </p>
        <img src="@/assets/svgs/ibm/alice.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IBM",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  max-height: 70vh;
}
</style>
