<template>
  <LandingScreen />
</template>

<script>
import LandingScreen from '@/views/landingscreen.vue'

export default {
  name: 'App',
  components: {
    LandingScreen
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}
</style>
