<template>
  <div>  
   <HeroBanner />
   <ArticleCard />
  </div>
</template>

<script>
  import HeroBanner from '../components/HeroBanner.vue'
  import ArticleCard from '../components/ArticleCard.vue'
  
  export default {
    name: 'Index',
    components: {
      HeroBanner,
      ArticleCard
    },
  }
</script>