<script setup>
import { ref, computed, watch } from "vue";

let timer = null;
const isRunning = ref(false);
const isSession = ref(true);

const sessionLength = ref(25);
const breakLength = ref(5);

const sessionTime = () => sessionLength.value * 60;
const breakTime = () => breakLength.value * 60;

const timeLeft = ref(sessionTime());

const alarmSound = ref(null);

// ---------------------------
// Formatting
// ---------------------------
const formattedTime = computed(() => {
  const m = Math.floor(timeLeft.value / 60);
  const s = timeLeft.value % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
});

// Progress bar width
const progressWidth = computed(() => {
  const total = isSession.value ? sessionTime() : breakTime();
  return `${((total - timeLeft.value) / total) * 100}%`;
});

// ---------------------------
// Timer Logic
// ---------------------------
function startTimer() {
  if (isRunning.value) return;

  isRunning.value = true;

  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      // timer ended
      clearInterval(timer);
      isRunning.value = false;

      alarmSound.value.play();
      alert(isSession.value ? "Session over! Time for a break." : "Break over! Time for a session.");

      switchTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  isRunning.value = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning.value = false;
  isSession.value = true;
  timeLeft.value = sessionTime();
}

function switchTimer() {
  isSession.value = !isSession.value;
  timeLeft.value = isSession.value ? sessionTime() : breakTime();
  startTimer();
}

// ---------------------------
// React to input changes
// ---------------------------
watch(sessionLength, resetTimer);
watch(breakLength, resetTimer);
</script>

<template>
  <div class="container">
    <h1>Pomodoro Timer</h1>

    <div class="timer">
      <div id="time">{{ formattedTime }}</div>
      <div class="progress-bar" :style="{ width: progressWidth }"></div>
    </div>

    <div class="buttons">
      <button @click="startTimer">Start</button>
      <button @click="stopTimer">Stop</button>
      <button @click="resetTimer">Reset</button>
    </div>

    <div class="settings">
      <label>Session Length:</label>
      <input type="number" v-model.number="sessionLength" min="1" max="60"> minutes

      <label>Break Length:</label>
      <input type="number" v-model.number="breakLength" min="1" max="30"> minutes
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

@keyframes backgroundAnimation {
  0% {
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  }
  50% {
    background: linear-gradient(120deg, #ff9a9e 0%, #fecfef 100%);
  }
  100% {
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  }
}

.container {
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.container:hover {
  transform: scale(1.05);
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

.timer {
  position: relative;
  font-size: 48px;
  margin-bottom: 20px;
  color: #333;
}

#time {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  background: #84fab0;
  transition: width 1s linear;
}

.buttons button {
  background: #84fab0;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.buttons button:hover {
  background: #8fd3f4;
  transform: scale(1.1);
}

.buttons button:active {
  transform: scale(1);
}

.settings {
  margin-top: 20px;
  font-size: 16px;
  color: #333;
}

input {
  width: 50px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  margin-left: 10px;
}
</style>
