import 'vuetify/styles'

import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router/router'


const app = createApp(App)
const vuetify = createVuetify() // Replaces new Vuetify()

app.use(vuetify)
app.use(router)

console.log(router.currentRoute)

app.mount('#app')
