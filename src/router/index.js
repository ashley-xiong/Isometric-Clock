import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import StartClockOrTimer from '@/views/StartClockOrTimer.vue';
import RealTimeClockCustomize from '@/views/RealTimeClockCustomize.vue'
import RealTimeClock from '@/views/RealTimeClock.vue'
import TimerCustomize from '@/views/TimerCustomize.vue'
import Timer from '@/views/Timer.vue'
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
  {
    path: '/real-time-clock',
    name: 'RealTimeClock',
    component: RealTimeClock,
  },
  {
    path:'/timer-customize',
    name: 'TimerClockCustomize',
    component: TimerCustomize,
  },
{
  path: '/timer',
  name: 'Timer',
  component: Timer,
}
]

export const router = createRouter({
  history: createWebHistory(),
  routes: route
})
