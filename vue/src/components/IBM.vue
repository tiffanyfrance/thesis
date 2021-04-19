<template>
  <div class="container white-container">
    <h2>Block Partitions (Sentence Level)</h2>
    <h3>
      IBM Watson Suite Tone Analyzer evaluates emotions based on sentence level,
      up to the first 100 sentences in a document.
    </h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <p>
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
        </p>
        <Stacks :filePath="book" />
      </div>
    </div>
  </div>
</template>

<script>
import Stacks from "./charts/Stacks.vue";
export default {
  components: { Stacks },
  name: "IBM",
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
img {
  max-height: 70vh;
}
</style>
