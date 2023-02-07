import { defineStore } from 'pinia'
//import products from "@/data/products.json"

export const useApiStore = defineStore('ApiStore', {

  id: "api",

// state = a function returning the initial state
    state: () => ({
      count: 1,
      apiData: {},
      currTask: null
    }),

// getters = retrieving data from a store
    getters: {
      doubleCount(state) {
        return state.count * 2
      },
      getTasks(state) {
        return state.apiData.tasks
      },
      getTaskById(state) {
        return (i) => state.apiData.tasks.find( x => x.id === i)
    
      },
      getCurrTask(state) {
        return state.apiData.tasks.find( x => x.id === 3)
    
      }
    },

// actions = modifying data in a store (can be async)
    actions: {
      setApiData(data) {
        try {
          this.apiData = data;
        } catch (error) {        
          console.log(error);
        }         
      },
      setCurrTask(state) {
        try {
          //this.currTask = (taskId) => state.apiData.tasks.find((task) => task.id === taskId)
          (task) => state.currTask = task
        } catch (error) {        
          //console.log(error);
        }  
      }
      //updateTask(id)
      //deleteTask
    }
  })