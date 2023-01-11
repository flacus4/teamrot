<script>

export default {
  name: 'TaskList',
  data() {
    return {
      tasks: tasks
    }
  },
  methods: {

  }
}
</script>

<template>
<!-- task rendering -->
<ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.text }} {{ task.id }}
    </li>
</ul>

</template>

<style>
</style>