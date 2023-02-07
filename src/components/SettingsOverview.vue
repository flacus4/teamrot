<script>

import { useTheme } from 'vuetify'
import { settings } from '../main.js'

export default {
  name: 'SettingsOverview',
  data() {
    return {
      darkMode: null,
      soundAlert: null,
      settings
    }
  },
  props: {
    apiData: {}
  },
  setup () {
    const theme = useTheme();

    return {
      theme,
      toggleTheme: () => {
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';        
      }
    }
  },
  methods: {
    playSound (){     
        new Audio( require('@/assets/ping.mp3')).play()  
    },
    toggleSound () {

       settings.soundAlert = !settings.soundAlert;
       this.soundAlert = settings.soundAlert;

        if(settings.soundAlert) {
          this.playSound();
        } 

    }
  },
  mounted (){

    // restore sound setings from global value (main.js)
    this.soundAlert = settings.soundAlert;    

    // restore theme from global value
    (this.theme.global.name.value == 'dark') 
        ? this.darkMode=true 
        : this.darkMode=false;
  }
}
</script>

<template>

<v-container fluid class="text-center">
    
  <v-row class="justify-center">  
    <v-col xs="12" md="6" lg="2">
      <v-switch 
        @click="toggleTheme" 
        color="primary" 
        v-model="darkMode" 
        label="Dark Mode">
        <template v-slot:label>      
          Dark Mode&nbsp;
          <v-icon icon="mdi-moon-waning-crescent" class="rotate-20 smaller"></v-icon>            
        </template>
      </v-switch>
    </v-col>
  </v-row>

  <v-row class="justify-center">
    <v-col xs="12" md="6" lg="2">
      <v-switch 
        @click="this.toggleSound" 
        color="primary" 
        v-model="soundAlert"
        label="">
        <template v-slot:label>      
          Ton&nbsp;
          <v-icon v-if="this.soundAlert" icon="mdi-volume-high" class="smaller"></v-icon>
          <v-icon v-else icon="mdi-volume-off" class="smaller"></v-icon>            
        </template>
      </v-switch>
    </v-col>  
  </v-row>

</v-container>

</template>

<style scoped>
.rotate-20 {
  transform: rotate(-20deg);
}
.smaller {
  scale: 0.8;
}
.switch-center {
  display: flex;
  justify-content: center;
}

</style>