<script>

import FetchersData from './components/FetchersData.vue'

export default {
  name: 'App',
  components: {
    FetchersData
  },
  data() {
    return {
      no_tasks: 9
    }
  },
  methods: {
    updateTaskBadge(value){
      this.no_tasks=value;
    }
  }
}
</script>

<template>

<v-app>

  <!-- Must have the app property -->
  <v-app-bar app title="Title" color="primary">
    
    <v-btn to="/health" stacked>
      <v-badge color="warning" dot>
        <v-icon icon="mdi-heart-pulse"></v-icon>
      </v-badge>
      Health
    </v-btn>
    

    <v-btn to="/tasks" stacked>
      <v-badge color="warning" :content=this.no_tasks >
        <v-icon icon="mdi-post"></v-icon>
      </v-badge>
      Tasks
    </v-btn>

    <v-btn to="/settings" stacked>
        <v-icon icon="mdi-cog"></v-icon>
      Settings
    </v-btn>


    <v-btn to="/login" stacked variant="tonal">
      <v-icon icon="mdi-login"></v-icon>
      Login
    </v-btn>

  </v-app-bar>

  <v-main ma-0 pa-0>
    <FetchersData />
  </v-main>

</v-app>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px;
}

</style>
