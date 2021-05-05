<template>
  <div id="corpus" class="container lgray-container">
    <h2>About this Project</h2>
    <h3>
      The initial goal was to include 100 out of print Project Gutenberg novels
      in the project, however, due to time constraints and pay walls, the actual
      number of books used as of May 2021 is about 25. The usage of this 
      corpus is detailed below.
    </h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <div class="flex-50">
          <h4>Thesis Goal</h4>
          <p class="description">
            The purpose of this thesis is to evaluate text from Project
            Gutenberg novels using the Natural Language Processing (NLP) task of
            Emotion Recognition. The project contains three parts.
          </p>
          <h4>Part I: Machine Learning</h4>
          <p class="description">
            The project attempts to explain and utilize the current research in
            Emotion Recognition and Natural Language Processing Sentiment
            tracking. Python and Jupyter Notebooks are used for data collection.
          </p>
          <h4>Part II: Visualization</h4>
          <p class="description">
            Visualizations for this project are specifically designed in order
            to best represent the data. Consideration has been given to both UX
            readability and integrity in relaying truthful information.
          </p>
          <h4>Part III: Book Production and Publication</h4>
          <p class="description">
            Finally, the goal of this project is to create meaningful, data
            driven book covers for classic literature. This goal includes
            designing, typesetting, and printing physical books (in accordance
            with US copyright laws).
          </p>
        </div>
        <div class="flex-50">
          <h4>Project Gutenberg</h4>
          <p class="description">
            Project Gutenberg is a crowd sourced project containing digitial
            copies of over 60,000 books. Many, but not all, of the titles in
            Project Gutenberg are considered royalty-free. The books used here
            are more than 100 years old, with authors deceased for more than 70
            years, meaning they are open to reprint in the original form without
            penalty in the US. Below is a sample of handcrafted data, using
            Project Gutenberg's book ids.
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
@media (max-width: 768px) {
  .description {
    width: 80vw;
  }
  h3 {
    margin-bottom: 50px;
  }
  h4 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .flex-50 {
    float: none;
  }
  #corpus.container {
    height: auto;
    top: auto;
    padding-bottom: 60px;
  }
  #corpus .subcontainer.vertical-center {
    position: relative;
    transform: translateY(0);
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    // max-height: calc(100vh + 60px);
    max-height: initial;
  }
}
</style>
