import { createApp } from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './router/index.js'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
//import { fa } from 'vuetify/iconsets/fa'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

Axios.defaults.baseURL = 'http://localhost:3000/'

// overwrite default colors 
// error: '#B00020',
// info: '#2196F3', 
// success: '#4CAF50', 
// warning: '#FB8C00'
// (... or define custom selector, e.g. notification:  '#...')

const colors = {
  primary: '#2196F3',
  'primary-darken-1': '#3700B3',
  secondary: '#03DAC6',
  'secondary-darken-1': '#018786',
}

const customLightTheme = {
  dark: false,
  colors: colors
}
const customDarkTheme = {
  dark: true,
  colors: colors
}


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
  }, 
  theme: {
    defaultTheme: 'customLightTheme',
    themes: {
      customLightTheme,
      customDarkTheme
    }
  }
})

createApp(App).use(router).use(vuetify).mount('#app')
