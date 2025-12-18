import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import StartClockOrTimer from '@/views/StartClockOrTimer.vue';
import ClockCustomizeCafe from '@/views/ClockCustomizers/ClockCustomizeCafe.vue'
import RealTimeClockCd from '@/views/Clocks/RealTimeClockCD.vue'
import RealTimeClockCN from '@/views/Clocks/RealTimeClockCN.vue'
import ClockCustomizeLibrary from '@/views/ClockCustomizers/ClockCustomizeLibrary.vue'
import ClockCustomizeRoom from '@/views/ClockCustomizers/ClockCustomizeRoom.vue'
import TimerCustomizeCafeDay from '@/views/TimerCustomizers/TimerCustomizeCafeDay.vue'
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
    path: '/real-time-clock-customize-cafe',
    name: 'RealTimeClockCustomize',
    component: ClockCustomizeCafe,
  },
  {
    path: '/real-time-clock-cd',
    name: 'RealTimeClockCD',
    component: RealTimeClockCd,
  },
  {
    path: '/real-time-clock-cn',
    name: 'RealTimeClockCN',
    component: RealTimeClockCN,
  },
  {
    path:'/real-time-clock-customize-library',
    name: 'RealTimeClockCustomizeLibrary',
    component: ClockCustomizeLibrary,
  },
  {
    path:'/real-time-clock-customize-room',
    name: 'RealTimeClockCustomizeRoom',
    component: ClockCustomizeRoom,
  },
  {
    path:'/timer-customize',
    name: 'TimerClockCustomize',
    component: TimerCustomizeCafeDay,
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
