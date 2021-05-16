<template>
  <div class="container white-container">
    <h2>Emotion Strength Over Time</h2>
    <h3>
      What does the emotional landscape of classic novels look like? 
      Using an emotion recognition API, I analyzed the text 
      of 26 Project Gutenberg novels published between 1810 and 1925.
      The classification is based on Plutchik’s Wheel of Emotion
      and includes the following labels:
      <span class="code">
        [<span style="color: #eb3c39">anger</span>,
        <span style="color: #ef673c">anticipation</span>,
        <span style="color: #f8ec2d">joy</span>,
        <span style="color: #d7e489">trust</span>,
        <span style="color: #b5dcb7">fear</span>,
        <span style="color: #00b4df">surprise</span>,
        <span style="color: #0775ba">sadness</span>,
        <span style="color: #64368f">disgust</span>].
      </span>
      The variable line chart shows intensity of an emotion - 
      the thicker the line, the stronger the value. The
      <span class="code"> y-axis</span> ranks the lines by instensity so that
      the strongest emotion rises to the top.
    </h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <p class="label">
          Select a title:
          <select v-model="book" name="" id="">
            <option value="MC/alice-in-wonderland-simple.csv">
              Alice in Wonderland
            </option>
            <option value="MC/huck-finn-simple.csv">
              The Adventures of Huckleberry Finn
            </option>
            <option value="MC/sherlock-holmes-simple.csv">
              The Adventures of Sherlock Holmes
            </option>
            <option value="MC/tom-sawyer-simple.csv">
              The Adventures of Tom Sawyer
            </option>
            <option value="MC/anna-karenina-simple.csv">Anna Karenina</option>
            <option value="MC/dracula-simple.csv">Dracula</option>
            <option value="MC/frankenstein-simple.csv">Frankenstein</option>
            <option value="MC/great-gatsby-simple.csv">The Great Gatsby</option>
            <option value="MC/heart-of-darkness-simple.csv">Heart of Darkness</option>
            <option value="MC/importance-of-being-ernest-simple.csv">The Importance of Being Ernest</option>
            <option value="MC/jane-eyre-simple.csv">Jane Eyre</option>
            <option value="MC/little-women-simple.csv">Little Women</option>
            <option value="MC/metamorphosis-simple.csv">Metamorphosis</option>
            <option value="MC/moby-dick-simple.csv">Moby Dick</option>
            <option value="MC/picture-of-dorian-gray-simple.csv">The Picture of Dorian Gray</option>
            <option value="MC/pride-and-prejudice-simple.csv">Pride and Prejudice</option>
            <option value="MC/scarlet-letter-simple.csv">The Scarlet Letter</option>
            <option value="MC/secret-garden-simple.csv">The Secret Garden</option>
            <option value="MC/dr-jekyll-simple.csv">Strange Case of Dr Jekyll and Mr Hyde</option>
            <option value="MC/tale-of-two-cities-simple.csv">Tale of Two Cities</option>
            <option value="MC/through-the-looking-glass.csv">
              Through the Looking Glass
            </option>
            <option value="MC/twenty-thousand-simple.csv">Twenty Thousand Leagues Under the Sea</option>
            <option value="MC/uncle-tom-simple.csv">Uncle Tom's Cabin</option>
             <option value="MC/war-of-worlds-simple.csv">
              The War of the Worlds
            </option>
            <option value="MC/wuthering-heights-simple.csv">
              Wuthering Heights
            </option>
          </select>
        </p>
        <VariableArea
          :filePath="book"
          :shuffle="true"
          leftAxisText="rank of emotion strength"
          :leftAxisArrow="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VariableArea from "./charts/VariableArea.vue";

export default {
  name: "MC",
  components: { VariableArea },
  props: {
    msg: String,
  },
  data() {
    return {
      book: "MC/alice-in-wonderland-simple.csv",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  max-height: 70vh;
}
</style>
