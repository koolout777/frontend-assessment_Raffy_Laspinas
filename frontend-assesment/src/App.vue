<template>
  <div id="app">
    <nav>
      <router-link class="navigation-link" to="/exercise-two">Exercise Two</router-link>
      <router-view />
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
