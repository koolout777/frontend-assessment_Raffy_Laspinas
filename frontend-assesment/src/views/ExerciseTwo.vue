<template>
  <div>
    <HeroBanner
      bannerImage="https://unsplash.com/photos/white-garlic-C0rKB-dB-_o"
      bannerText="Exercise Two!"
    />
    <Tab />
  </div>
</template>

<script>
import Tab from '../components/Tab.vue'
import HeroBanner from '../components/HeroBanner.vue'
export default {
  name: "ExerciseTwo",
  components: {
    HeroBanner,
    Tab
  }
};
</script>