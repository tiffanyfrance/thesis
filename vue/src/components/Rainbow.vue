<template>
  <div class="container lgray-container">
    <h2>Gradient Based Visualization</h2>
    <h3>
      My next question was: can I use a gradient in order to 
      get a feel for the overall tone of a book? 
      For this, I discovered IBM Watson's Tone Analyzer. 
      This API returns document level results for emotion labeling. 
      The API uses the following emotions, labeled here by loosely 
      following the coloring of Wilcox and Plutchik: 
      <span class="code">
        [<span style="color: #64368f">analytical</span>,
        <span style="color: #0775ba">sadness</span>,
        <span style="color: #b5dcb7">fear</span>,
        <span style="color: #d7e489">confident</span>,
        <span style="color: #f8ec2d">joy</span>,
        <span style="color: #ef673c">tentative</span>,
        <span style="color: #eb3c39">anger</span>].
      </span>
    </h3>
    <div class="flex-container">
      <div class="large-screens">
        <div class="flex-25">
          <div class="col">
            <h5>Sample Output</h5>
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
            },...
          ]
        }</pre>
            </div>
            <h5>CSS Rendering</h5>
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
    );</pre>
            </div>
          </div>
        </div>
        <div class="flex-50">
          <div class="col">
            <div class="gradient-group">
              <p class="label">
                Select a Title:<br />
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
                  <option value="IBM/anna-karenina-TA.json">
                    Anna Karenina
                  </option>
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
                  <option value="IBM/metamorphosis-TA.json">
                    Metamorphosis
                  </option>
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
                  <option value="IBM/uncle-tom-TA.json">
                    Uncle Tom's Cabin
                  </option>
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
        </div>
        <div class="flex-25">
          <div class="col">
            <h5>Automating with Illustrator Script</h5>
            <p class="description">
              In order to make the book cover, I needed a programmatic way to
              create a gradient in Illustrator. Illustrator allows you to create
              scripts in javascript and run them from the program. After much
              googling and tweaking, I was able to write a script to auto
              generate a gradient with accurate rampPoints representing the data
              distribution in the book rendering below.
            </p>
            <div class="code">
              <pre>
// Illustrator doesn't recognize "let"

var color = new RGBColor();
color.red = vals[a].colors[0];
color.green = vals[a].colors[1];
color.blue = vals[a].colors[2];

currentRamp += (vals[a].score * 100);

var topPath = app.activeDocument...;
topPath.filled = true;
topPath.fillColor = colorOfGradient;
          </pre>
            </div>
            
          </div>
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
.col {
  padding: 20px;
  width: calc(100% - 40px);
}
.flex-25 .col {
  padding-top: 70px;
}
h5 {
  margin: 5px 0;
}
.code {
  // width: 80%;
  // padding: 20px 20px 0px;
  // margin-top: 20px;
}
.label {
  width: 100%;
  padding-bottom: 0px;
}
.description {
  text-align: left;
  font-weight: 200;
  font-size: 14px;
  margin-top: 15px;
  // width: 80%;
}
.gradient {
  width: calc(100% - 70px);
  height: calc(100% - 70px);
  min-height: 560px;
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
@media (max-width: 768px) {
  .flex-25 .col {
    padding-top: 10px;
  }
  .description {
    margin: 0 auto;
    width: 100%;
    padding-bottom: 20px;
  }
}
</style>
