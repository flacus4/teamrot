import { createRouter, createWebHistory } from 'vue-router'
//import DashboardOverview from '../components/DashboardOverview.vue'
import HealthManagement from '../components/HealthManagement.vue'
import LoginPrompt from '../components/LoginPrompt.vue'
import SettingsOverview from '../components/SettingsOverview.vue'
import TaskList from '../components/TaskList.vue'

const routes = [
//   {
//      path: "/",
//      name: "dashboard",
//      component: DashboardOverview
//    },
  {
    path: '/tasks',
    name: 'tasks',
    component: TaskList
  },
  {
    path: '/health',
    name: 'health',
    component: HealthManagement
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPrompt
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsOverview
  }
]

const router = createRouter({
    history: createWebHistory(),
  routes
})

export default router