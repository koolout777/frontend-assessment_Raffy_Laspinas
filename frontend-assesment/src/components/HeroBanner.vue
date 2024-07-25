<template>
  <div class="hero-banner" :style="{ backgroundImage: `url(${bannerImage})` }">
    <div class="hero-banner__inner">
      <h1 class="hero-banner__title">
        {{ bannerText }}
      </h1>
      <p class="hero-banner__description">
        {{ bannerSubText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroBanner",
  props: {
    bannerImage: {
      type: String,
      default: "https://via.placeholder.com/1920x650"
    },
    bannerText: {
      type: String,
      default: "Hello Developer!"
    },
    bannerSubText: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
  }
};
</script>