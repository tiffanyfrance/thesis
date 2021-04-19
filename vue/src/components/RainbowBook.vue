<template>
  <div class="container">
    <h2>Book Rendering</h2>
    <h3>IBM Watson Tone Analyzer (Document Level)</h3>
    <div class="subcontainer vertical-center flex-container">
      <img src="@/assets/rainbow/alice-in-wonderland-rainbow.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RainbowBook",
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
  padding-bottom: 0px;
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
  p,
  span {
    font-size: 12px;
  }
}
span.thin {
  font-weight: 200;
  color: #999;
}
</style>
