import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home'
import Countries from '../components/Countries'
import News from '../components/News'

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/countries',
    name: 'Countries',
    component: Countries
  },
  {
    path: '/news',
    name: 'News',
    component: News
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router