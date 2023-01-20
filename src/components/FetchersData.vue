<script>
import TaskNotification from './TaskNotification.vue';

export default {
data() {
    return {
    data: [],
    intervalId: null,
    id: 0,
    exampleSocket: null
    }
},
components: {
    TaskNotification
},
methods: {
  createTask(){
    let randInt = Math.round(Math.random() * (10000 - 3000) + 3000);

    clearInterval(this.intervalId);
    
    this.exampleSocket.send(
        JSON.stringify(
            {
                type: 'update', 
                path: 'tasks', 
                id: 1, 
                data: {
                    id: 1, 
                    description: "",
                    module: "",
                    createdAt: this.getDateTime()
                } 
            }
        )
    ); 
    this.intervalId = setInterval(this.createNewTask, randInt);
  },
  getDateTime() {
            const options = {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric'
            }
            return new Intl.DateTimeFormat('de-DE', options).format(Date.now());
        }
},
async created() {

    // Connect to the server.
    const socketUrl = "ws://localhost:8080";
    this.exampleSocket = new WebSocket(socketUrl);
    
    // Listen connection events.
    this.exampleSocket.onopen = (ev) => {
        console.log('Socket opened: ', ev);
        this.exampleSocket.send(JSON.stringify({type: 'read', path: 'users'}));
        this.exampleSocket.send(JSON.stringify({type: 'read', path: 'modules'}));
        this.exampleSocket.send(JSON.stringify({type: 'read', path: 'tasks'}));
    
    this.intervalId = setInterval(this.createTask, 15000);
    
    };
    this.exampleSocket.onmessage = (m) => {
        let message = JSON.parse(m.data);        
        this.data[message.path] = message.data;
    };
    this.exampleSocket.onclose = (ev) => {
        console.log('Socket closed: ', ev);
    };
        
}


}
</script>

<template>

    <TaskNotification/>
    <router-view :apiData="data"></router-view>    
    <!-- <router-view></router-view> -->
    
    <!-- <h3>Users</h3>
    <ul>
        <li v-for="user in data['users']" :key="user.id">
        {{ user }}
        </li>
    </ul>
    <h3>Modules</h3>
    <ul>
        <li v-for="module in data['modules']" :key="module.id">
        {{ module }}
        </li>
    </ul>
    <h3>Tasks</h3>
    <ul>
        <li v-for="task in data['tasks']" :key="task.id">
        {{ task }}
        </li>
    </ul> -->
</template>