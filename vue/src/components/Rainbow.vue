<template>
  <div class="container">
    <h2>IBM Watson Tone Analyzer (Document Level)</h2>
    <h3>Lorem ipsum</h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="flex-50">
        <div class="gradient-group">
          <p class="label">
            Select a Title:
            <select name="" id="">
              <option value="">Alice in Wonderland</option>
            </select>
          </p>
          <p class="gradient no-margin-top">&nbsp;</p>
          <div class="text">
            <p class="no-margin-top">Analytical<br /><span class="thin">123</span></p>
            <p>Sadness<br /><span class="thin">123</span></p>
            <p>Fear<br /><span class="thin">123</span></p>
            <p>Confident<br /><span class="thin">0%</span></p>
            <p>Joy<br /><span class="thin">123</span></p>
            <p>Tentative<br /><span class="thin">123</span></p>
            <p>Anger<br /><span class="thin">123</span></p>
          </div>
        </div>
      </div>
      <div class="flex-50 book-cover">
        <p class="label">Book Cover Rendering</p>
        <img src="@/assets/rainbow/alice-in-wonderland-rainbow.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rainbow",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  max-height: 620px;
}
.book-cover {
  text-align: left;
}
.gradient-group {
  margin: 0 auto;
  width: 400px;
}
.label {
  width: 300px;
  text-align: left;
}
.gradient {
  width: 300px;
  height: 620px;
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
.text {
  float: left;
  padding-left: 20px;
  text-align: left;
  p, span {
    font-size: 12px;
  }
}
span.thin {
  font-weight: 200;
  color: #999;
}
</style>
