
<template>
  <div class="container white-container">
    <h2>Printed Books</h2>
    <h3>
      The final step in the process was to prepare the text by typesetting the
      content in InDesign. Once this was complete I used Barnes and Nobels for a
      printing service. These books are available for purchase. A portion of the
      revenue will be donated back to Project Gutenberg in support of their
      mission.
    </h3>
    <div class="subcontainer vertical-center flexbox">
      <div class="large-screens">
        <!-- <div class="flex-50">
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
        <div class="flex-50 flexbox"> -->
        <!-- <h4>Purchase Books</h4> -->
        <div class="flex-25">
          <h4>Alice in Wonderland</h4>
          <a
            href="https://www.barnesandnoble.com/w?ean=9781666283822"
            target="_blank"
            class="img-link"
          >
            <img
              src="@/assets/bn/bn-alice.png"
              alt="Purchase Alice in Wonderland at Barnes and Noble"
            />
          </a>
          <br /><br />
          <a
            href="https://www.barnesandnoble.com/w?ean=9781666283822"
            target="_blank"
            class="button"
          >
            Available at Barnes and Noble</a
          >
        </div>
        <div class="flex-25">
          <h4>Frankenstein</h4>
          <a
            href="https://www.barnesandnoble.com/w?ean=9781666283785"
            target="_blank"
            class="img-link"
          >
            <img
              src="@/assets/frankenstein.png"
              alt="Purchase Frankenstein at Barnes and Noble"
            />
          </a
          ><br /><br />
          <a
            href="https://www.barnesandnoble.com/w?ean=9781666283785"
            target="_blank"
            class="button"
          >
            Available at Barnes and Noble </a
          ><br />or<br />
          <a
            href="https://www.amazon.com/gp/product/1666283789/ref=crt_ewc_img_srh_1?ie=UTF8&psc=1&smid=ATVPDKIKX0DER"
            target="_blank"
            class="button"
          >
            Available at Amazon
          </a>
        </div>
        <div class="flex-25">
          <h4>Pride and Prejudice</h4>
          <a
            href="https://www.barnesandnoble.com/w?ean=9781666283891"
            target="_blank"
            class="img-link"
          >
          <img
            src="@/assets/pride.png"
            alt="Purchase Pride and Prejudice at Barnes and Noble"
          /></a>
          <br /><br />
          <a
            href="https://www.barnesandnoble.com/w?ean=9781666283891"
            target="_blank"
            class="button"
            >Available at Barnes and Noble</a
          >
          <br />
        </div>
        <div class="flex-25">
          <h4>The War of the Worlds</h4>
          <a
            href="https://www.barnesandnoble.com/w?ean=9781666285413"
            target="_blank"
            class="img-link"
          >
          <img
            src="@/assets/war.png"
            alt="Purchase The War of the Worlds at Barnes and Noble"
          />
          </a><br /><br />
          <a
            href="https://www.barnesandnoble.com/w?ean=9781666285413"
            target="_blank"
            class="button"
            >Available at Barnes and Noble</a
          >
        </div>
        <!-- </div> -->
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
  height: 40vh;
}
.img-link {
  border: none;
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
