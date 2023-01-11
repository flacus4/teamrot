<script>
import { fetchMessage } from '@/services/fetchers'
import axios from 'axios'

export default {
data() {
    return {
    users: '',
    dbdata: []
    }
},
async created() {
    try {
    this.dbdata = await fetchMessage()
    this.users = await axios.get("/users");
    }
    catch(error){
    console.log(error)
    }
}
}
</script>

<template>
    <p>{{ users }}</p>
</template>