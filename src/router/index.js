import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import StartClockOrTimer from '@/views/StartClockOrTimer.vue';
import Enchantis from '@/views/Enchantis.vue'

import ClockCustomizeCafe from '@/views/ClockCustomizers/ClockCustomizeCafe.vue'
import RealTimeClockCD from '@/views/Clocks/RealTimeClockCD.vue'
import RealTimeClockCN from '@/views/Clocks/RealTimeClockCN.vue'

import ClockCustomizeLibrary from '@/views/ClockCustomizers/ClockCustomizeLibrary.vue'
import RealTimeClockLD from '@/views/Clocks/RealTimeClockLD.vue'
import RealTimeClockLN from '@/views/Clocks/RealTimeClockLN.vue'

import ClockCustomizeRoom from '@/views/ClockCustomizers/ClockCustomizeRoom.vue'
import RealTimeClockRD from '@/views/Clocks/RealTimeClockRD.vue'
import RealTimeClockRN from '@/views/Clocks/RealTimeClockRN.vue'

import TimerCustomizeCafe from '@/views/TimerCustomizers/TimerCustomizeCafe.vue'
import TimerCD from '@/views/Timers/TimerCD.vue'
import TimerCN from '@/views/Timers/TimerCN.vue'

import TimerCustomizeLibrary from '@/views/TimerCustomizers/TimerCustomizeLibrary.vue'
import TimerLD from '@/views/Timers/TimerLD.vue'
import TimerLN from '@/views/Timers/TimerLN.vue'

import TimerCustomizeRoom from '@/views/TimerCustomizers/TimerCustomizeRoom.vue'
import TimerRD from '@/views/Timers/TimerRD.vue'
import TimerRN from '@/views/Timers/TimerRN.vue'

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
    path: '/enchantis',
    name: 'Enchantis',
    component: Enchantis,
  },
  {
    path: '/real-time-clock-customize-cafe',
    name: 'RealTimeClockCustomize',
    component: ClockCustomizeCafe,
  },
  {
    path: '/real-time-clock-cd',
    name: 'RealTimeClockCD',
    component: RealTimeClockCD,
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
    path: '/real-time-clock-ld',
    name: 'RealTimeClockLD',
    component: RealTimeClockLD,
  },
  {
    path: '/real-time-clock-ln',
    name: 'RealTimeClockLN',
    component: RealTimeClockLN,
  },
  {
    path:'/real-time-clock-customize-room',
    name: 'RealTimeClockCustomizeRoom',
    component: ClockCustomizeRoom,
  },
  {
    path: '/real-time-clock-rd',
    name: 'RealTimeClockRD',
    component: RealTimeClockRD,
  },
  {
    path: '/real-time-clock-rn',
    name: 'RealTimeClockRN',
    component: RealTimeClockRN,
  },
  {
    path: '/timer-customize-cafe',
    name: 'TimerCustomize',
    component: TimerCustomizeCafe,
  },
  {
    path: '/timer-cd',
    name: 'TimerCD',
    component: TimerCD,
  },
  {
    path: '/timer-cn',
    name: 'TimerCN',
    component: TimerCN,
  },
  {
    path: '/timer-customize-library',
    name: 'TimerCustomizeLibrary',
    component: TimerCustomizeLibrary,
  },
  {
    path: '/timer-ld',
    name: 'TimerLD',
    component: TimerLD,
  },
  {
    path: '/timer-ln',
    name: 'TimerLN',
    component: TimerLN,
  },
  {
    path: '/timer-customize-room',
    name: 'TimerCustomizeRoom',
    component: TimerCustomizeRoom,
  },
  {
    path: '/timer-rd',
    name: 'TimerRD',
    component: TimerRD,
  },
  {
    path: '/timer-rn',
    name: 'TimerRN',
    component: TimerRN,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: route
})
