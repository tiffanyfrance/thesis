<template>
  <div id="heroVideo" class="container">
    <div class="vertical-center">
      <iframe src="https://player.vimeo.com/video/590709008?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=7abfa84d19" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Machine-Driven Literary Book Covers"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroVideo",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#heroVideo.container {
  height: 100vh;
  .vertical-center {
    top: 45%;
  }
}
</style>
