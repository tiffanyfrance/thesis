<template>
  <div class="container">
    <h2>Emotion Models</h2>
    <h3>
      The psychoanalytic field lacks an official consensus on how to categorize
      human emotions, however data scientists often use the schemas based on the
      work of several prominent researchers, including Plutchik, Ekman, Parrot,
      Tomkins, and Wilcox. The following models also contain color-emotion
      assignment which are used in this project.
    </h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <div class="flex-50">
          <h4>Plutchik's Emotion Model</h4>
          <p class="description">
            Robert Plutchik proposed eight primary emotions:
            <span class="code"
              >[anger, fear, sadness, disgust, surprise, anticipation, trust,
              joy].</span
            >
            He placed these emotions on a color wheel, assigning a hue to each
            term. Colors are used to highlight both opposite emotions and
            intensity within the vertical dimension of the flower cones.
          </p>
          <p>
            <img src="@/assets/plutchik.svg" alt="Plutchik Wheel of Emotion" />
          </p>
        </div>
        <div class="flex-50">
          <h4>Wilcox's Wheel of Emotions</h4>
          <p class="description">
            This is a 
            <a href="https://observablehq.com/d/9d1ae0157e8ef4bd">rendering</a> 
            of the Feeling Wheel by Gloria Wilcox.
             Wilcox uses four basic emotions:
            <span class="code"> [scared, sad, mad, glad]</span>. Glad is
            separated into three emotions:
            <span class="code"> [joyful, powerful, peaceful]</span>. More about
            the Feeling Wheel can be found
            <a href="https://allthefeelz.app/feeling-wheel/">here</a>.
          </p>
          <p>
            <img src="@/assets/svgs/wheel.svg" alt="Feeling Wheel" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Emotion",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.large-screens {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-height: 400px;
}
.description {
  font-weight: 200;
  font-size: 14px;
  width: 75%;
  max-width: 460px;
  margin: 0 auto;
  text-align: justify;
  margin-bottom: 60px;
}
</style>
