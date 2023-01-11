import { createApp } from 'vue'
import App from './App.vue'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:3000/';

createApp(App).mount('#app')
