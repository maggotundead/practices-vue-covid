import { createRouter, createWebHistory } from 'vue-router'

// import Home from '../components/Home'
// import Countries from '../components/Countries'
// import News from '../components/News'

const routes = [
  {
    path: '',
    name: 'Home',
    component: () =>
    import(/* webpackChunkName: "home" */ '../views/HomePage.vue'),
  },
  {
    path: '/countries',
    name: 'Countries',
    component: () =>
    import(/* webpackChunkName: "home" */ '../views/CountriesPage.vue'),
  },
  {
    path: '/news',
    name: 'News',
    component: () =>
    import(/* webpackChunkName: "home" */ '../views/NewsPage.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router