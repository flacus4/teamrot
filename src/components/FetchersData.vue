<script>
import axios from 'axios'

//import apiData from'@services/api'

export default {
data() {
    return {
    dbdata: '',
   // apiData: ''
    }
},
/*async getData() {
  try {
    const response = await axios.get('/db');
    this.dbdata = response.data;
  } catch (error) {
    console.error(error);
  }
},*/
async created() {
    axios   
        .get('/db')
        .then((response) => {
        this.dbdata = response.data;
        })
        .catch((errors) => {
        console.log(errors);
        });
}
}
</script>

<template>
    <h3>Users</h3>
    <ul>
        <li v-for="user in dbdata.users" :key="user.id">
        {{ user }}
        </li>
    </ul>
    <h3>Modules</h3>
    <ul>
        <li v-for="module in dbdata.modules" :key="module.id">
        {{ module }}
        </li>
    </ul>
    <h3>Tasks</h3>
    <ul>
        <li v-for="task in dbdata.tasks" :key="task.id">
        {{ task }}
        </li>
    </ul>
    <v-btn variant="tonal">Button</v-btn>
    <!--<p>{{ apiData }}</p>-->
</template>