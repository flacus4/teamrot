<script>

import { useRoute } from 'vue-router'
import { useApiStore } from '@/stores/ApiStore'

export default {
  name: 'TaskDetail',
  data() {
    return {
        taskId: null,
        task: {},
        checkboxes: [],
        enabled: false,
        selected: ['John'],
        radioGroup: "1",
        data: null
    }
  },
  methods: {
    methodName () {},
  },  
  setup() {
    const store = useApiStore()
    return { 
      store,
      getTaskById: store.getTaskById
    }
  },
  async mounted () {
    const route = useRoute();   
    this.taskId = JSON.parse(route.params.id);  
    this.task = this.getTaskById(JSON.parse(this.taskId))
    console.log(this.task)
  },
}
</script>

<template>

<v-container fluid>

  <v-row no-gutters>

    <!-- START COLUMN 1/3 (back navigation) -->
    <v-col sm="12" md="2">
      <v-btn to="/tasks">
        <v-icon >mdi-arrow-left</v-icon>
      </v-btn>
    </v-col>
    <!-- END COLUMN 1/3 -->


    <!-- START COLUMN 2/3 (content) -->
    <v-col sm="12" md="8">

      <h2>Fehler an "{{ this.task.module }}"</h2>  
      <br>
      <p>{{ this.task.description }}</p>
      <br>

      <v-row>
        <v-col xs="12" md="8"> 

          <div class="error-image svg-container" :style="{backgroundImage:'url(https://images.unsplash.com/photo-1555589228-5dc844368071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFpbmJvYXJkfGVufDB8fDB8fA==&auto=format&fit=crop&w=800&q=60)'}">
              <svg class="svg-content">
              <g>
                <title>Carrier</title>
                <rect stroke="#000000" stroke-width="2" fill="none" x="0" y="0" width="" height="" viewBox="0 0 800 600" id="rectangle_svg"/>
              </g>
            </svg>
          </div>              
          <!-- <v-img
            src="https://images.unsplash.com/photo-1555589228-5dc844368071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFpbmJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            cover
          ></v-img> -->

        </v-col>

        <v-col xs="12" md="4">         

          <v-checkbox-group>          
              <h4>Ursache</h4>
              <v-checkbox 
                  v-model="selected"
                  label="beschmutzt/beschädigt"
                  value="error-1"
              ></v-checkbox>
              <v-checkbox 
                  v-model="selected"
                  label="verdreht"
                  value="error-2"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="fehlt"
                  value="error-3"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Material falsch"
                  value="error-4"
              ></v-checkbox>          
              <v-checkbox
                v-model="enabled"
                label="Sonstiges"
                value="error-5"
              ></v-checkbox>
              <v-text-field
                :disabled="!enabled"
                hide-details
                label="Sonstiges"
              ></v-text-field>
      
          </v-checkbox-group>  

        </v-col>        
      </v-row>

      <v-row>
        <v-col>

        <h4>Weiterleiten an</h4>

        <v-btn-toggle>      
          <v-btn 
            append-icon="mdi-leaf" 
            variant="tonal" 
            color="green">
            Reparatur
          </v-btn>
          <v-btn 
            append-icon="mdi-help" 
            variant="tonal">
            unklar
          </v-btn> 
          <v-btn 
            append-icon="mdi-delete" 
            variant="tonal" 
            color="red">
            Ausschuss
          </v-btn>   
        </v-btn-toggle>

        </v-col>
      </v-row>
      
      <!-- <v-row>   
        <v-col>       
        <v-textarea 
              name="input-3-1" 
              label="Kommentar" 
              value="" 
          ></v-textarea>   
        </v-col> 
      </v-row> -->

      <v-row>
        <v-col> 
          <v-btn color="primary">
            senden
          </v-btn>
        </v-col> 
      </v-row>       

    </v-col>
    <!-- END COLUMN 2/3 -->


    <!-- START COLUMN 3/3 (meta) -->
    <v-col xs="12" md="2">
          
      <h4>Aufgabe</h4>       
      <p>{{ this.task.createdAt }}</p>      
      <p>ID: {{ this.task.id }}</p>
      <p>Status: {{ this.task.status }}</p>
      <br>
      <h4>Bearbeiter</h4>
      <p>{{ this.task.assignedTo }}</p>   
      <br>
      <h4>Historie</h4>
      <p> - </p>
 
    </v-col>
    <!-- END COLUMN 3/3 -->
      
  </v-row> 

    

</v-container>

</template>

<style scoped>

.v-input__details {
  display: none;
}
.error-image {
  height: 100%;
  width: auto;
  background-size: contain;
  background-repeat: no-repeat;
}

.svg-container {
    display: inline-block;
    position: relative;
    width: 100%;
    vertical-align: top;
    overflow: hidden;
}

.svg-content {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
}



</style>