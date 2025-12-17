<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

let timer = null

const totalSeconds = ref(0)
const isPaused = ref(false)

const sessionCount = ref(1)
const breakCount = ref(1)

const maxSessions = 4
const MAX_BREAKS = maxSessions - 1

const isBreak = ref(false)

const focus = ref(30)
const breakTime = ref(10)

const hours = computed(() => String(Math.floor(totalSeconds.value / 3600)).padStart(2, '0'))

const minutes = computed(() =>
  String(Math.floor((totalSeconds.value % 3600) / 60)).padStart(2, '0'),
)

const seconds = computed(() => String(totalSeconds.value % 60).padStart(2, '0'))
/* ---------- SESSION DISPLAY ---------- */
const sessionInfo = computed(() =>
  isBreak.value
    ? `Break: ${breakCount.value}/${MAX_BREAKS}`
    : `Session: ${sessionCount.value}/${maxSessions}`,
)

/* ---------- TITLE (updateTitle) ---------- */
function updateTitle() {
  const sessionType = isBreak.value ? 'BREAK' : 'FOCUS'
  console.log(
    `${sessionType} ${
      isBreak.value ? breakCount.value : sessionCount.value
    }/${isBreak.value ? MAX_BREAKS : maxSessions}`,
  )
}
/* ---------- TIMER ---------- */
function startTimer(seconds) {
  clearInterval(timer)
  totalSeconds.value = seconds

  timer = setInterval(() => {
    if (!isPaused.value) {
      totalSeconds.value--
    }
  }, 1000)
}

function startFocus() {
  isBreak.value = false
  startTimer(focus.value * 60)
}
function startBreak() {
  if (breakCount.value <= MAX_BREAKS) {
    isBreak.value = true
    startTimer(breakTime.value * 60)
  }
}

function addSession() {
  if (!isBreak.value && sessionCount.value < maxSessions) {
    sessionCount.value++
  } else if (isBreak.value && breakCount.value < MAX_BREAKS) {
    breakCount.value++
  }
  updateTitle()
}

function pauseTimer() {
  isPaused.value = !isPaused.value
}
function resetTimer() {
  clearInterval(timer)
  totalSeconds.value = 0
  sessionCount.value = 1
  breakCount.value = 1
  isPaused.value = false
  isBreak.value = false
  updateTitle()
}

/* ---------- LIFECYCLE ---------- */
onMounted(() => {
  updateTitle()
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<template>
  <section class="pomotime">
    <div class="timer-display">
      <div class="time-box" id="hours">{{hours}}</div>
      <div class="time-box" id="minutes">{{minutes}}</div>
      <div class="time-box" id="seconds">{{seconds}}</div>
    </div>

    <div class="session-box">{{sessionInfo}}</div>

    <div class="settings">
      <div class="setting">
        <label for="focus">focus (min)</label>
        <input type="number" v-model.number="focus" min="1" />
        <button @click="startFocus()">Start Focus</button>
      </div>

      <div class="setting">
        <label for="breakTime">break (min)</label>
        <input type="number" v-model.number="breakTime" min="1" />
        <button @click="startBreak()">Start Break</button>
      </div>

      <div class="controls">
        <button @click="addSession()">Add session</button>
        <button @click="pauseTimer()">Pause</button>
        <button @click="resetTimer()">Reset</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.pomotime {
  font-family:
    URW Chancery L,
    cursive;
  background-color: papayawhip;
  color: mediumpurple;
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timer-display {
  display: flex;
  gap: 20px;
  background-color: transparent;
  padding: 20px;
  border-radius: 14px;
  margin-bottom: 20px;
}

.time-box {
  background-color: floralwhite;
  padding: 16px 7px 16px 6px;
  border-radius: 12px;
  font-size: 6.5em;
  font-weight: 400;
  text-align: center;
  justify-content: center;
  min-width: 98px;
}

.settings {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  background-color: transparent;
  padding: 40px;
  border-radius: 20px;
  max-width: 700px;
}

.setting {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
}

input[type='number'] {
  width: 70px;
  padding: 10px;
  font-size: 1.2em;
  border-radius: 6px;
  border: none;
  text-align: center;
}

button {
  margin-top: 12px;
  padding: 9px 17px;
  font-size: 1.3em;
  background-color: floralwhite;
  color: mediumpurple;
  font-family:
    URW Chancery L,
    cursive;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-weight: normal;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: white;
}

.controls {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -30px;
}

.session-box {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: -20px;
  flex-wrap: wrap;
}

.session-box {
  background-color: floralwhite;
  padding: 9px 8px;
  border-radius: 40px;
  font-size: 1.6em;
  font-weight: 400;
  text-align: center;
  min-width: 220px;
}
</style>
