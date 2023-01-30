<script>

import { useRoute } from 'vue-router'

export default {
  name: 'TaskDetail',
  mounted(){
    const route = useRoute();
    console.warn("route", route.params);
    this.taskID = route.params.id;
  },
  data() {
    return {
        taskID: null
    }
  },
  props: {
    apiData: {}
  },
  methods: {

  },
//    created() {
//     this.$watch(
//       () => this.$route.params,
//       (toParams, previousParams) => {
//         // react to route changes...
//       }
//     )
//   }
}
</script>

<template>

<h2>Hello Task Detail no. {{ $route.params.id }}</h2>

<div>Aufgabe {{ $route.params.id }}</div>
<v-container fluid>
    <p>{{ radios || 'null' }}</p>
    <v-radio-group
      v-model="radios"
      mandatory
    >
      <v-radio
        label="Radio 1"
        value="radio-1"
      ></v-radio>
      <v-radio
        label="Radio 2"
        value="radio-2"
      ></v-radio>
    </v-radio-group>
  </v-container>

<v-btn>
    senden
</v-btn>


</template>

<style scoped>



</style>