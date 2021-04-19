<template>
  <div class="container white-container">
    <h2>Hedonometer</h2>
    <h3>
      The psychoanalytic field lacks an official consensus on how to categorize
      human emotions, however data scientists often use the schemas based on the
      work of several prominent researchers, including Plutchik, Ekman, Parrot,
      Tomkins, and Wilcox. The following models also contain color-emotion
      assignment which are used in this project.
    </h3>
    <div class="subcontainer vertical-center">
      <div class="large-screens">
        <p>
          <select v-model="book" name="" id="">
            <option value="Hedonometer/alice-in-wonderland-hedonometer.json">
              Alice in Wonderland
            </option>
            <option
              value="Hedonometer/through-the-looking-glass-hedonometer.json"
            >
              Through the Looking-Glass
            </option>
            <option value="Hedonometer/wuthering-heights-hedonometer.json">
              Wuthering Heights
            </option>
            <option value="Hedonometer/frankenstein-hedonometer.json">
              Frankenstein
            </option>
            <option value="Hedonometer/pride-and-prejudice-hedonometer.json">
              Pride and Prejudice
            </option>
            <option
              value="Hedonometer/importance-of-being-ernest-hedonometer.json"
            >
              Importance of Being Ernest
            </option>
            <option value="Hedonometer/moby-dick-hedonometer.json">
              Moby Dick
            </option>
            <option
              value="Hedonometer/twenty-thousand-leagues-hedonometer.json"
            >
              Twenty Thousand Leagues Under the Sea
            </option>
            <option value="Hedonometer/tale-of-two-cities-hedonometer.json">
              Tale of Two Cities
            </option>
            <option value="Hedonometer/picture-of-dorian-gray-hedonometer.json">
              Picture of Dorian Gray
            </option>
            <option value="Hedonometer/great-gatsby-hedonometer.json">
              Great Gatsby
            </option>
            <option value="Hedonometer/metamorphosis-hedonometer.json">
              Metamorphosis
            </option>
            <option value="Hedonometer/dracula-hedonometer.json">
              Dracula
            </option>
            <option value="Hedonometer/jane-eyre-hedonometer.json">
              Jane Eyre
            </option>
            <option value="Hedonometer/heart-of-darkness-hedonometer.json">
              Heart of Darkness
            </option>
            <option value="Hedonometer/huck-finn-hedonometer.json">
              The Adventures of Huckleberry Finn
            </option>
            <option value="Hedonometer/secret-garden-hedonometer.json">
              The Secret Garden
            </option>
            <option value="Hedonometer/war-of-the-worlds-hedonometer.json">
              The War of the Worlds
            </option>
            <option value="Hedonometer/anna-karenina-hedonometer.json">
              Anna Karenina
            </option>
            <option value="Hedonometer/uncle-tom-hedonometer.json">
              Uncle Tom's Cabin
            </option>
            <option value="Hedonometer/little-women-hedonometer.json">
              Little Women
            </option>
            <option value="Hedonometer/scarlet-letter-hedonometer.json">
              The Scarlet Letter
            </option>
            <option value="Hedonometer/dr-jekyll-hedonometer.json">
              The Strange Case of Dr Jekyll and Mr Hyde
            </option>
            <option value="Hedonometer/tom-sawyer-hedonometer.json">
              The Adventures of Tom Sawyer
            </option>
            <option value="Hedonometer/sherlock-holmes-hedonometer.json">
              The Adventures of Sherlock Holmes
            </option>
          </select>
        </p>
        <Bubbles :filePath="book" />
      </div>
    </div>
  </div>
</template>

<script>
import Bubbles from "./charts/Bubbles.vue";
export default {
  components: { Bubbles },
  name: "Hedonometer",
  props: {
    msg: String,
  },
  data() {
    return {
      book: "Hedonometer/alice-in-wonderland-hedonometer.json",
    };
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
