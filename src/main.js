import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const pinia = createPinia();
const app = createApp(App)

export const settings = reactive({
  soundAlert: true
})

const colors = {
  primary: '#2196F3',
  'primary-darken-1': '#196DB3',
  'primary-darken-2': '#104673',
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

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')


