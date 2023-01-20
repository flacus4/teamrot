<script>

export default {
  name: 'TaskList',
  data() {
    return {
      tasks: []
    }
  },
  props: {
    apiData: {}
  },
  methods: {

  }
}
</script>

<template>

<v-expansion-panels class="mb-6">  
  <v-expansion-panel v-for="task in apiData['tasks']" :key="task.id">
    <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">     
      Aufgabe {{ task.id }} vom {{ task.createdAt }}
      <!-- <template v-slot:actions="{ expanded }">
        <v-icon :color="!expanded ? 'teal' : ''" :icon="expanded ? 'mdi-pencil' : 'mdi-check'"></v-icon>
      </template> -->
      <!-- <template v-slot:actions>
        <v-icon color="error" icon="mdi-alert-circle"></v-icon>
      </template> -->
    </v-expansion-panel-title>
   
    <v-expansion-panel-text>
      {{ task }}
    </v-expansion-panel-text>
  </v-expansion-panel>
</v-expansion-panels>

</template>

<style>
</style>