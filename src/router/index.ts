import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '../view/HomeView.vue'
import CounterViewVue from '../view/CounterView.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeViewVue
    },
    {
        path: '/counter',
        name: 'Counter',
        component: CounterViewVue
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router