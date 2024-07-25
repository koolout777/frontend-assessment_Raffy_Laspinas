<template>
  <div id="app">
    <nav>
      <router-link
        v-if="!isExerciseTwoPage"
        class="navigation-link"
        to="/exercise-two"
      >
        <span class="arrow arrow-first"></span>
        <span class="arrow arrow-second"></span>
        Exercise Two
      </router-link>
      <router-view />
    </nav>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const route = useRoute();
    const isExerciseTwoPage = computed(() => route.path === '/exercise-two');
    return {
      isExerciseTwoPage,
    };
  },
};
</script>