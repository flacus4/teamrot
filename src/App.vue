<script>

import FetchersData from './components/FetchersData.vue'
import TaskNotification from './components/TaskNotification.vue'

export default {
  name: 'App',
  components: {
    FetchersData,
    TaskNotification
  }
}
</script>

<template>

<v-app>

  <!-- Must have the app property -->
  <v-app-bar app></v-app-bar>

  <v-main>
    <TaskNotification />
     <FetchersData />
  </v-main>

</v-app>


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
