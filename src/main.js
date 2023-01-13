import { createApp } from 'vue'
import App from './App.vue'
import Axios from 'axios'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
//import { fa } from 'vuetify/iconsets/fa'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

Axios.defaults.baseURL = 'http://localhost:3000/'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
//      fa,
      mdi
    }
  }
})

createApp(App).use(vuetify).mount('#app')
