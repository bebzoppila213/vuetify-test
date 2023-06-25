/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'


// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import { store } from './store/store'
import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "@/pages/Main"
import EmployeDetails from "@/pages/EmployeDetails"

const routes = [
    { path: '/', component: Main },
    { path: '/employe-details/:id', component: EmployeDetails },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(store).use(router)

registerPlugins(app)

app.mount('#app')