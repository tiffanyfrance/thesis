
<template>
  <div class="container white-container">
    <h2>Conclusion</h2>
    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia maxime tempore, quam consectetur animi corrupti repellat hic voluptate, vero quis necessitatibus eius perferendis laborum soluta, a facere nihil sed odit?</h3>
    <div class="subcontainer vertical-center flexbox">
      <div style="large-screens">
        <div class="flex-50">
          <h4>Final Thoughts</h4>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore accusantium cumque harum ipsum cum veniam quas dolores rerum similique error necessitatibus deserunt in, neque vel optio at aliquid ad?
          </p>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore accusantium cumque harum ipsum cum veniam quas dolores rerum similique error necessitatibus deserunt in, neque vel optio at aliquid ad?
          </p>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore accusantium cumque harum ipsum cum veniam quas dolores rerum similique error necessitatibus deserunt in, neque vel optio at aliquid ad?
          </p>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore accusantium cumque harum ipsum cum veniam quas dolores rerum similique error necessitatibus deserunt in, neque vel optio at aliquid ad?
          </p>
        </div>
        <div class="flex-50 flexbox">
          <!-- <h4>Purchase Books</h4> -->
          <div class="flex-33">
          <h4>Alice in Wonderland</h4>
            <img src="@/assets/bn/bn-alice.png" alt="Purchase Alice in Wonderland at Barnes and Nobles"><br /><br />
            <a href="https://www.barnesandnoble.com/w?ean=9781666270631" target="_blank" class="button">
            View at Barnes and Nobles</a>
          </div>
          <div class="flex-33">
          <h4>Wuthering Heights</h4>
            <img src="@/assets/bn/bn-alice.png" alt="Alice in Wonderland Barnes and Nobles"><br /><br />
            <button>View at Barnes and Nobles</button>
          </div>
          <div class="flex-33">
          <h4>The War of the Worlds</h4>
            <img src="@/assets/bn/bn-alice.png" alt="Alice in Wonderland Barnes and Nobles"><br /><br />
            <button>View at Barnes and Nobles</button>
          </div>
        </div>
      </div>   
    </div>
  </div>
</template>

<script>
export default {
  name: "Conclusion",
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
  margin-bottom: 10px;
}
</style>
