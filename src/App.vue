<script>

import FetchersData from './components/FetchersData.vue'

export default {
  name: 'App',
  components: {
 // TaskList,
    FetchersData

  }
}
</script>

<template>
  <!--<TaskList /> -->
  <FetchersData />

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
