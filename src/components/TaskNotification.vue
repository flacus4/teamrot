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
    showTaskDetail(tid) {
      this.$router.push({name:'TaskDetail', params:{id:tid}})
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
      <v-btn @click="showTaskDetail(latestTaskData.id)" color="white">
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