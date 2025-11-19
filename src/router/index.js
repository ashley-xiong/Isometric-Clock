import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import StartClockOrTimer from '@/views/StartClockOrTimer.vue';
import RealTimeClockCustomize from '@/views/RealTimeClockCustomize.vue'

const route = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/customizer-start',
    name: 'StartClockOrTimer',
    component: StartClockOrTimer,
  },
  {
    path: '/real-time-clock-customize',
    name: 'RealTimeClockCustomize',
    component: RealTimeClockCustomize,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: route
})
