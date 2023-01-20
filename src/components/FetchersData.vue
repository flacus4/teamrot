<script>
import TaskNotification from './TaskNotification.vue';

export default {
data() {
    return {
    alert: false,
    data: [],
    intervalId: null,
    id: null,
    randInt: 10000,
    task: null,
    exampleSocket: null
    }
},
components: {
    TaskNotification
},
methods: {
    createNotification(){
       this.alert = true;
       setTimeout(() => {
            this.alert = false;
       }, (this.randInt-200))
       //this.$emit('updateTaskBadge', this.data.tasks.length);
    },
    createTask(){         

        let no_tasks = this.data.tasks.length;   
        let dateTime = this.getDateTime();
        let assignee = this.getAvailableUser();
        
        if(no_tasks == 0)
            this.id = 0;
        else {
           this.id = this.getMaxId(this.data.tasks)
        }

        this.task = {
            type: 'create', 
            path: 'tasks', 
            id: this.id++, 
            data: {
                id: this.id, 
                description: "",
                module: "",
                createdAt: dateTime,
                comments: [],
                assignedTo: assignee
            } 
        }            
        this.exampleSocket.send(JSON.stringify(this.task));              
        this.createNotification();  

        clearInterval(this.intervalId);    
            
        if(no_tasks < 8) {

            this.randInt = Math.round(Math.random() * (40000 - 20000) + 20000); 
            this.intervalId = setInterval(this.createTask, this.randInt);     

        }
        
      
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
    },
    getAvailableUser(){    
        let assignee = "-";
        const availableUsers = this.data.users.filter( item => {
            return item.available
        });
        assignee = availableUsers[Math.floor(Math.random()*availableUsers.length)]

        return assignee.id;
    },
    getMaxId(obj) {
        return (Math.max.apply(Math, obj.map(function(o) {
            return o.id;
        })));
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
    
        this.intervalId = setInterval(this.createTask, this.randInt);
    
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

    <TaskNotification v-model="alert" />
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
    </ul>-->
</template>