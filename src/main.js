import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

export const settings = reactive({
  soundAlert: true
})

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

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }, 
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: colors
      },
      dark: {
        colors: colors
      }
    }
  }
})

app.use(router).use(vuetify).mount('#app')
