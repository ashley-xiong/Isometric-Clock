import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RealTimeClockCustom from '../views/RealTimeClockCustom.vue';

const route = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/real-time-clock',
    name: 'RealTimeClockCustom',
    component: RealTimeClockCustom,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  route,
});
