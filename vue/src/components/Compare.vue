<template>
  <div class="container lgray-container">
    <h2>Try it out!</h2>
    <h3>
      How well do Machine Learning APIs match emotions in literary text? Use the
      sliders below to assess the emotions in each sentence and then compare
      your output to IBM Watson's sentence level emotion labels.
    </h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <div class="flex-50">
          <h4>Select a title:</h4>
          <select v-model="book" name="" id="">
            <option value="IBM/alice-in-wonderland-TA.json">
              Alice in Wonderland
            </option>
            <option value="IBM/through-the-looking-glass-TA.json">
              Through the Looking-Glass
            </option>
            <option value="IBM/wuthering-heights-TA.json">
              Wuthering Heights
            </option>
            <option value="IBM/frankenstein-TA.json">Frankenstein</option>
            <option value="IBM/pride-and-prejudice-TA.json">
              Pride and Prejudice
            </option>
            <option value="IBM/importance-of-being-ernest-TA.json">
              Importance of Being Ernest
            </option>
            <option value="IBM/moby-dick-TA.json">Moby Dick</option>
            <option value="IBM/twenty-thousand-leagues-TA.json">
              Twenty Thousand Leagues Under the Sea
            </option>
            <option value="IBM/tale-of-two-cities-TA.json">
              Tale of Two Cities
            </option>
            <option value="IBM/picture-of-dorian-gray-TA.json">
              Picture of Dorian Gray
            </option>
            <option value="IBM/great-gatsby-TA.json">Great Gatsby</option>
            <option value="IBM/metamorphosis-TA.json">Metamorphosis</option>
            <option value="IBM/dracula-TA.json">Dracula</option>
            <option value="IBM/jane-eyre-TA.json">Jane Eyre</option>
            <option value="IBM/heart-of-darkness-TA.json">
              Heart of Darkness
            </option>
            <option value="IBM/huck-finn-TA.json">
              The Adventures of Huckleberry Finn
            </option>
            <option value="IBM/tess-TA.json">Tess of the d’Urbervilles</option>
            <option value="IBM/secret-garden-TA.json">The Secret Garden</option>
            <option value="IBM/war-of-the-worlds-TA.json">
              The War of the Worlds
            </option>
            <option value="IBM/anna-karenina-TA.json">Anna Karenina</option>
            <option value="IBM/uncle-tom-TA.json">Uncle Tom's Cabin</option>
            <option value="IBM/little-women-TA.json">Little Women</option>
            <option value="IBM/scarlet-letter-TA.json">
              The Scarlet Letter
            </option>
            <option value="IBM/dr-jekyll-TA.json">
              The Strange Case of Dr Jekyll and Mr Hyde
            </option>
            <option value="IBM/tom-sawyer-TA.json">
              The Adventures of Tom Sawyer
            </option>
            <option value="IBM/sherlock-holmes-TA.json">
              The Adventures of Sherlock Holmes
            </option>
          </select>
          <p class="quote">{{ sentence.text }}</p>
          <p></p>
          <div id="sliders">
            <div class="slider">
              <input
                type="range"
                v-model="userTones.joy"
                id="joy"
                name="joy"
                min="0"
                max="1"
                step="0.01"
              />
              <label for="joy">Joy</label>
            </div>
            <div class="slider">
              <input
                type="range"
                v-model="userTones.sadness"
                id="sadness"
                name="sadness"
                min="0"
                max="1"
                step="0.01"
              />
              <label for="sadness">Sadness</label>
            </div>
            <div class="slider">
              <input
                type="range"
                v-model="userTones.fear"
                id="fear"
                name="fear"
                min="0"
                max="1"
                step="0.01"
              />
              <label for="fear">Fear</label>
            </div>
            <div class="slider">
              <input
                type="range"
                v-model="userTones.anger"
                id="anger"
                name="anger"
                min="0"
                max="1"
                step="0.01"
              />
              <label for="anger">Anger</label>
            </div>
            <div class="slider">
              <input
                type="range"
                v-model="userTones.analytical"
                id="analytical"
                name="analytical"
                min="0"
                max="1"
                step="0.01"
              />
              <label for="analytical">Analytical</label>
            </div>
            <div class="slider">
              <input
                type="range"
                v-model="userTones.tentative"
                id="tentative"
                name="tentative"
                min="0"
                max="1"
                step="0.01"
              />
              <label for="tentative">Tentative</label>
            </div>
            <div class="slider">
              <input
                type="range"
                v-model="userTones.confident"
                id="confident"
                name="confident"
                min="0"
                max="1"
                step="0.01"
              />
              <label for="confident">Confident</label>
            </div>
          </div>
          <div>
            <button @click="nextSentence">Next</button>
          </div>
        </div>
        <div class="flex-50">
          <!-- <h4>Viz</h4> -->
          <p class="description">
            <Radar :sentence="sentence" :userTones="userTones" />
          </p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import Radar from "./charts/Radar.vue";

export default {
  components: { Radar },
  name: "Compare",
  props: {
    msg: String,
  },
  data() {
    return {
      book: "IBM/alice-in-wonderland-TA.json",
      sentence: {
        text: "",
        tones: [],
      },
      userTones: {
        sadness: 0,
        joy: 0,
        analytical: 0,
        tentative: 0,
        fear: 0,
        anger: 0,
        confident: 0,
      },
    };
  },
  watch: {
    book: {
      immediate: true,
      handler() {
        this.nextSentence();
      },
    },
  },
  methods: {
    async nextSentence() {
      this.userTones = {
        sadness: 0,
        joy: 0,
        analytical: 0,
        tentative: 0,
        fear: 0,
        anger: 0,
        confident: 0,
      };

      let data = await d3.json("/data/" + this.book);

      let sentencesArr = [];

      // flatten data
      for (let d of data) {
        for (let s of d.sentences_tone) {
          if (s.tones.length >= 3) {
            sentencesArr.push(s);
          }
        }
      }

      sentencesArr.sort((a, b) => b.tones.length - a.tones.length);

      this.sentence =
        sentencesArr[Math.floor(Math.random() * sentencesArr.length)];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  max-height: 400px;
}
.description {
  font-weight: 200;
  font-size: 14px;
  //   width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: justify;
  margin-bottom: 60px;
}
.quote {
  font-size: 28px;
  font-family: Baskerville, "DM Serif Display";
  font-weight: 100;
  /* margin-top: 20px; */
  padding: 40px 40px;
  margin: 40px 20%;
  text-align: center;
  background: #333;
  color: #fff;
  border-radius: 3px;
}
#sliders {
  padding: 40px 40px;
  margin: 40px 20%;
  text-align: center;
  background: #ddd;
  // color: #fff;
  border-radius: 3px;
  .slider {
    text-align: left;
    width: 230px;
    margin: 0 auto;
  }
  label {
    padding-left: 10px;
    font-size: 12px;
  }
}
input[type="range"] {
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 300px;
  height: 5px;
  background: #999;
  border: none;
  border-radius: 3px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: steelblue;
  margin-top: -4px;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #666;
}
</style>
