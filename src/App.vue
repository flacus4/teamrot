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
  <v-app-bar app title="Title" color="grey-lighten-3">
    
    <v-btn stacked>
      <v-badge
        color="error"
        dot
      >
        <v-icon icon="mdi-heart-pulse"></v-icon>
      </v-badge>

      Health
    </v-btn>
    

    <v-btn stacked>
      <v-badge
        color="error"
        content="9+"
      >
        <v-icon icon="mdi-post"></v-icon>
      </v-badge>

      Tasks
    </v-btn>

    <v-btn stacked>
        <v-icon icon="mdi-cog"></v-icon>
      Settings
    </v-btn>


    <v-btn
      stacked
      variant="tonal"
    >
      <v-icon icon="mdi-login"></v-icon>

      Login
    </v-btn>

  </v-app-bar>

  <v-main ma-0 pa-0>
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
