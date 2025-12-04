<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// reactive values
const time = ref("");
const date = ref("");

// constants
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// helper
function zeroPadding(num, digit) {
  return String(num).padStart(digit, "0");
}

// update function
function updateTime() {
  const cd = new Date();

  time.value =
    zeroPadding(cd.getHours(), 2) +
    ":" +
    zeroPadding(cd.getMinutes(), 2) +
    ":" +
    zeroPadding(cd.getSeconds(), 2);

  date.value =
    zeroPadding(cd.getFullYear(), 4) +
    "-" +
    zeroPadding(cd.getMonth() + 1, 2) +
    "-" +
    zeroPadding(cd.getDate(), 2) +
    " " +
    week[cd.getDay()];
}

// lifecycle
let timer = null;

onMounted(() => {
  updateTime();                      // run immediately
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>

<style scoped>
#clock {
  font-family: URW Chancery L, cursive;
  color:black;
  text-align: center;
  padding: 0 2rem;
}

.time {
  letter-spacing: 0.05em;
  font-size: 70px;
}

.date {
  letter-spacing: 0.1em;
  font-size: 24px;
}
</style>
