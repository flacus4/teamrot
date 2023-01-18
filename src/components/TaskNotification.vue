<script>

export default {
  name: 'TaskNotification',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>

  <v-alert  
      prominent  
      closable 
      type="info" 
      title="Neue Aufgabe"
  >
      <div>Fehlerkontrolle Kamera-Station</div>
      <v-btn>
          jetzt durchführen
      </v-btn>
  </v-alert> 

</template>

<style scoped>



</style>