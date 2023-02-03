<script>

export default {
  name: 'NoTaskNotification',
  data() {
    return {
    }
  }
}
</script>

<template>

  <v-alert
      prominent 
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