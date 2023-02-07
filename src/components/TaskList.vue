<script>
import { useApiStore } from '@/stores/ApiStore'

export default {
  name: 'TaskList',
  data() {
    return {
     
    }
  },
  props: {
    apiData: {}
  },
  methods: {
    // getTaskByID(tid){
    //   let t = this.apiData.tasks.find(x => x.id === tid)
    //   return t;
    // },
    showTaskDetail(tid) {
      this.$router.push({ name:`TaskDetail`, params:{id: tid }})      
    }
  },
  setup() {
    const store = useApiStore()
        
    return { 
      store
    }
  }
}
</script>

<template>

<h3>Aktuelle Aufgaben</h3>

<v-expansion-panels class="mb-6">  
  <v-expansion-panel v-for="task in apiData['tasks']" :key="task.id">
    
    <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">   
      Aufgabe {{ task.id }} vom {{ task.createdAt }}

      <v-btn class="offset-7" color="primary-darken-1" small :to="{ name: 'TaskDetail', params: { id: task.id } }">
        bearbeiten
      </v-btn>
    </v-expansion-panel-title>
   
    <v-expansion-panel-text>
      
      {{ task }}  

    </v-expansion-panel-text>

  </v-expansion-panel>
</v-expansion-panels>

</template>

<style>

</style>