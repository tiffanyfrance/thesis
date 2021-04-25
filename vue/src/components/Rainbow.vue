<template>
  <div class="container lgray-container">
    <h2>Gradient Based Visualization</h2>
    <h3>
      IBM Tone Analyzer returns document level results for emotion labeling. In
      this visualization, each document level emotion percentage was mapped to a
      color in a gradient. The percentages add up to 100% producing the gradient
      on the left. These percentages were used both in creating a
      <span class="code">linear-gradient()</span> and for producing an
      Illustrator script on the right.
    </h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <div class="flex-33">
          <div class="gradient-group">
            <p class="label">
              Select a Title:
              <select v-model="book" name="" id="">
                <option value="IBM/alice-in-wonderland-TA.json">
                  Alice in Wonderland
                </option>
                <option value="IBM/huck-finn-TA.json">
                  The Adventures of Huckleberry Finn
                </option>
                <option value="IBM/sherlock-holmes-TA.json">
                  The Adventures of Sherlock Holmes
                </option>
                <option value="IBM/tom-sawyer-TA.json">
                  The Adventures of Tom Sawyer
                </option>
                <option value="IBM/anna-karenina-TA.json">Anna Karenina</option>
                <option value="IBM/dracula-TA.json">Dracula</option>
                <option value="IBM/frankenstein-TA.json">Frankenstein</option>
                <option value="IBM/great-gatsby-TA.json">Great Gatsby</option>
                <option value="IBM/heart-of-darkness-TA.json">
                  Heart of Darkness
                </option>
                <option value="IBM/importance-of-being-ernest-TA.json">
                  Importance of Being Ernest
                </option>
                <option value="IBM/jane-eyre-TA.json">Jane Eyre</option>
                <option value="IBM/little-women-TA.json">Little Women</option>
                <option value="IBM/metamorphosis-TA.json">Metamorphosis</option>
                <option value="IBM/moby-dick-TA.json">Moby Dick</option>
                <option value="IBM/picture-of-dorian-gray-TA.json">
                  Picture of Dorian Gray
                </option>
                <option value="IBM/pride-and-prejudice-TA.json">
                  Pride and Prejudice
                </option>
                <option value="IBM/scarlet-letter-TA.json">
                  The Scarlet Letter
                </option>
                <option value="IBM/secret-garden-TA.json">
                  The Secret Garden
                </option>
                <option value="IBM/dr-jekyll-TA.json">
                  The Strange Case of Dr Jekyll and Mr Hyde
                </option>
                <option value="IBM/tale-of-two-cities-TA.json">
                  Tale of Two Cities
                </option>
                <option value="IBM/tess-TA.json">
                  Tess of the d’Urbervilles
                </option>
                <option value="IBM/through-the-looking-glass-TA.json">
                  Through the Looking-Glass
                </option>
                <option value="IBM/twenty-thousand-leagues-TA.json">
                  Twenty Thousand Leagues Under the Sea
                </option>
                <option value="IBM/uncle-tom-TA.json">Uncle Tom's Cabin</option>
                <option value="IBM/war-of-the-worlds-TA.json">
                  The War of the Worlds
                </option>
                <option value="IBM/wuthering-heights-TA.json">
                  Wuthering Heights
                </option>
              </select>
            </p>
            <Gradient :filePath="book" />
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
          </pre
            >
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
          </pre
            >
          </div>
        </div>
        <div class="flex-33">
          <p class="description">
            The output of Tone Analyzer for each emotion was divided by the
            total in order to get a percentage of the whole. Each value was
            assigned it's associated color with a "stop value" as the
            percentage. The values were culmative, with the final value being
            100%.
          </p>
          <div class="code">
            <pre>
      var color = new RGBColor();
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
          </pre
            >
          </div>
          <p class="description">
            In order to make the book cover, I needed a programmatic way to
            create a gradient in Illustrator. Illustrator allows you to create
            scripts in javascript and run them from the program. After much
            googling and tweaking, I was able to write a script to auto generate
            a gradient with accurate rampPoints representing the data
            distribution in the book rendering below.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gradient from "./charts/Gradient.vue";
export default {
  components: { Gradient },
  name: "Rainbow",
  props: {
    msg: String,
  },
  data() {
    return {
      book: "IBM/alice-in-wonderland-TA.json",
    };
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
  height: calc(100vh - 360px);
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
</style>
