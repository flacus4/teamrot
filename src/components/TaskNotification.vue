<script>

export default {
  name: 'TaskNotification',
  data() {
    return {
    }
  },
  props: {
    latestTaskData: {}
  },
  methods: {
    showTaskDetail() {
      this.$router.push({name:'TaskDetail', params:{id: this.latestTaskData.id }})
    }
  }
}
</script>

<template>

  <v-alert  v-if="latestTaskData"
      type="warning" 
      title="Neue Aufgabe"
  >
      <div>Modul: {{ latestTaskData.module }}</div>
      <v-btn @click="showTaskDetail()" color="white">
        jetzt durchführen
      </v-btn>
  </v-alert> 

  <v-alert  v-else
      type="info" 
      title="Keine aktuellen Benachrichtigungen"
  >
      <v-btn to="/tasks">
        zur Aufgabenübersicht
      </v-btn>
  </v-alert> 

</template>

<style scoped>

</style>