<template>
  <div class="container white-container">
    <h2>APIs Referenced</h2>
    <h3>
      Several APIs were referenced during the exectution of this project. 
      Some APIs were used to collect data, others were used 
      in part (for instance the hedonometer list), while others 
      were simply referenced for learning purposes. 
    </h3>
    <div class="subcontainer vertical-center flex-container">
      <div class="large-screens">
        <div class="flex-33">
          <h4>Enterprise/Propriatary</h4>
          <table>
            <tr>
              <td>
                <h5>MeaningCloud</h5>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod ratione illum enim ipsam! Neque est possimus dicta rerum adipisci voluptatem omnis! Odit, tenetur eveniet? At omnis sint voluptatibus! Nostrum?
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h5>ParalellDots</h5>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod ratione illum enim ipsam! Neque est possimus dicta rerum adipisci voluptatem omnis! Odit, tenetur eveniet? At omnis sint voluptatibus! Nostrum?
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h5>IBM Watson Tone Analyzer</h5>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod ratione illum enim ipsam! Neque est possimus dicta rerum adipisci voluptatem omnis! Odit, tenetur eveniet? At omnis sint voluptatibus! Nostrum?
                </p>
              </td>
            </tr>
          </table>
        </div>
        <div class="flex-33">
          <h4>Open Source</h4>

          <table>
            <tr>
              <td>
                <h5>Text2Emo</h5>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod ratione illum enim ipsam! Neque est possimus dicta rerum adipisci voluptatem omnis! Odit, tenetur eveniet? At omnis sint voluptatibus! Nostrum?
                </p>
              </td>
            </tr>
             
             <tr>
              <td>
                <h5>LIMBIC</h5>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod ratione illum enim ipsam! Neque est possimus dicta rerum adipisci voluptatem omnis! Odit, tenetur eveniet? At omnis sint voluptatibus! Nostrum?
                </p>
              </td>
            </tr>
             <tr>
              <td>
                <h5>IEMOCAP Emotion Detection</h5>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod ratione illum enim ipsam! Neque est possimus dicta rerum adipisci voluptatem omnis! Odit, tenetur eveniet? At omnis sint voluptatibus! Nostrum?
                </p>
              </td>
            </tr>
          </table>
        </div>
        <div class="flex-33">
          <h4>Hand Crafted Resources/Research</h4>

          <table>
            <tr>
              <td>
                <h5>Hedonometer (BOW, TF IDF)</h5>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod ratione illum enim ipsam! Neque est possimus dicta rerum adipisci voluptatem omnis! Odit, tenetur eveniet? At omnis sint voluptatibus! Nostrum?
                </p>
              </td>
            </tr>
             <tr>
              <td>
                <h5>SVM (Hackathon)</h5>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod ratione illum enim ipsam! Neque est possimus dicta rerum adipisci voluptatem omnis! Odit, tenetur eveniet? At omnis sint voluptatibus! Nostrum?
                </p>
              </td>
            </tr>
             <tr>
              <td>
                <h5>SVM (thesis paper)</h5>
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod ratione illum enim ipsam! Neque est possimus dicta rerum adipisci voluptatem omnis! Odit, tenetur eveniet? At omnis sint voluptatibus! Nostrum?
                </p>
              </td>
            </tr>
          </table>
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
img {
  max-height: 400px;
}
h5 {
  margin-bottom: 10px;
}
.description {
  font-weight: 200;
  font-size: 14px;
  // width: 75%;
  // max-width: 460px;
  margin: 0 auto;
  // text-align: justify;
  margin-bottom: 10px;
}
table {
  margin: 0 auto;
  max-width: 320px;
}
td {
  text-align: center;
}
@media (max-width: 768px) {
  .flex-33 {
    float: none;
    width: 100%;
  }
}
</style>
