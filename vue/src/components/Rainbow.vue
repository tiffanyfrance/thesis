<template>
  <div class="container lgray-container">
    <h2>IBM Watson Tone Analyzer (Document Level)</h2>
    <h3>For this visualization, I wanted to use the colors
          for each emotion to create a gradient that could
          be used for book covers. The gradient would express
          each emotion within a multihued pallette, bringing
          the strongest emotion to the forefront.</h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
      <div class="flex-33">
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
      <div class="flex-33">
        <div class="code">
          <pre>
             "document_tone": {
                "tones": [
                  {
                    "score": 0.552241,
                    "tone_id": "sadness",
                    "tone_name": "Sadness"
                  },
                  {
                    "score": 0.561087,
                    "tone_id": "joy",
                    "tone_name": "Joy"
                  },
                  {
                    "score": 0.518802,
                    "tone_id": "analytical",
                    "tone_name": "Analytical"
                  },...
                ]
            }
          </pre>
        </div>
        <div class="code">
          <pre>
            background: linear-gradient(
              120deg,
              #64368f 10.36%,
              #00b4df 34.44%,
              #b5dcb7 45.27%,
              #f8ec2d 77.75%,
              #ef673c 89.58%,
              #eb3c39 100%
            );
          </pre>
        </div>
      </div>
      <div class="flex-33">
        <p class="description">
          I started with output from Tone Analyzer on the document
          level labels. The output was divided by the total in order
          to get a percentage of the whole. Each value was assigned 
          it's associated color with a "stop value" as the 
          percentage. The values were culmative, with the final value
          being 100%. This was applied to a CSS gradient as seen on 
          the left.
        </p>
        <div class="code">
          <pre>      var color = new RGBColor();
      color.red = vals[a].colors[0];
      color.green = vals[a].colors[1];
      color.blue = vals[a].colors[2];

      currentRamp += (vals[a].score * 100);

      newGradient.gradientStops[a].rampPoint = currentRamp;
      newGradient.gradientStops[a].color = color;
      
      var colorOfGradient = new GradientColor();
      colorOfGradient.gradient = newGradient;

      var topPath = app.activeDocument.pathItems[0];
      topPath.filled = true;
      topPath.fillColor = colorOfGradient;
          </pre>
        </div>
        <p class="description">
          In order to make the book cover, I needed a programmatic 
          way to create a gradient in Illustrator. Illustrator
          allows you to create scripts in javascript and 
          run them from the program. After much googling and 
          tweaking, I was able to write a script to auto generate
          a gradient with accurate rampPoints representing
          the data distribution in the book rendering below.
          </p>
      </div>
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
.code {
  width: 80%;
  margin-top: 20px;
}
img {
  max-height: 620px;
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
.description {
  text-align: left;
  font-weight: 200;
  font-size: 14px;
  margin-top: 15px;
  width: 80%;
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
