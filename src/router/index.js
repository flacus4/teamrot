import { createRouter, createWebHistory } from 'vue-router'
//import DashboardOverview from '../components/DashboardOverview.vue'
import HealthManagement from '../components/HealthManagement.vue'
import LoginPrompt from '../components/LoginPrompt.vue'
import SettingsOverview from '../components/SettingsOverview.vue'
import TaskDetail from '../components/TaskDetail.vue'
import TaskList from '../components/TaskList.vue'

const routes = [
//   {
//      path: "/",
//      name: "dashboard",
//      component: DashboardOverview
//    },
  {
    path: '/tasks',
    name: 'TaskList',
    component: TaskList
  },
  {
    path: '/tasks/:id',
    name: 'TaskDetail',
    component: TaskDetail
  },
  {
    path: '/health',
    name: 'HealthManagement',
    component: HealthManagement
  },
  {
    path: '/login',
    name: 'LoginPrompt',
    component: LoginPrompt
  },
  {
    path: '/settings',
    name: 'SettingsOverview',
    component: SettingsOverview
  }
]

const router = createRouter({
    history: createWebHistory(),
  routes
})

export default router