import { createApp } from 'vue'
import App from './App.vue'
import Axios from 'axios'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

Axios.defaults.baseURL = 'http://localhost:3000/'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')
