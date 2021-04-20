<template>
  <div class="container white-container">
    <h2>About this Project</h2>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <div class="flex-50">
          <h4>
            Thesis Goal
          </h4>
          <p class="description">
            The purpose of this thesis is to evaluate text from 
            Project Gutenberg novels using the Natural Language 
            Processing (NLP) task of Emotion Recognition. The project
            contains three parts.
          </p>
          <h5>Part I: Machine Learning</h5>
          <p class="description"> 
            The project uses propriatary APIs, open source APIs,
            research, and hand crafted solutions in order to 
            classify the corpuses with the apporpriate 
            emotion label.
          </p>
          <h5>Part II: Visualization</h5>
          <p class="description"> 
            The project uses propriatary APIs, open source APIs,
            research, and hand crafted solutions in order to 
            classify the corpuses with the apporpriate 
            emotion label.
          </p>
          <h5>Part III: Book Production and Publication</h5>
          <p class="description"> 
            The project uses propriatary APIs, open source APIs,
            research, and hand crafted solutions in order to 
            classify the corpuses with the apporpriate 
            emotion label.
          </p>
        </div>
        <div class="flex-50">
          <h4>Project Gutenberg</h4>
          <p class="description">
            Project Gutenberg is a crowd sourced project containing 
            digitial copies of over 60,000 books. Many, but not 
            all, of the titles in Project Gutenberg are considered
            royalty-free. The books used here are more than 100 years 
            old, with authors deceased for more than 70 years,
            meaning they are open to reprint in the original form 
            without penalty in the US.
          </p>
          <div class="code-snippet">
            <!-- don't autoformat - formatting of code in this doc is important -->
            <pre>
          <code class="html code">
      [{
          "id": 5230,
          "novel": "The Invisible Man",
          "author": "H.G. Wells",
          "pub": 1897
      },
      {
          "id": 12573,
          "novel": "Rock Crystal",
          "author": "Adalbert Stifter",
          "pub": 1845
      },
      {
          "id": 23997,
          "novel": "Eugene Onegin",
          "author": "Alexander Pushkin",
          "pub": 1833
      }...]
          </code>
          </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Corpus",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  max-height: 70vh;
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
.code-snippet {
  max-width: 400px;
  margin: 0 auto;
}
</style>
