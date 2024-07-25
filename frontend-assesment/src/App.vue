<template>
  <div id="app">
    <nav>
      <router-link class="navigation-link" to="/exercise-two">
        <span class="arrow arrow-first"></span>
        <span class="arrow arrow-second"></span>
        Exercise Two
      </router-link>
      <router-view />
    </nav>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
