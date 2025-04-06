import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/category/:id', name: 'Category', component: CategoryView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
