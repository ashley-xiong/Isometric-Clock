<script setup>
import PomoTimer from '@/components/PomoTimer.vue'
</script>

<template>
  <section class="container">
    <img src="../../src/assets/cafe/daytime.jpg" alt="Cafe in the Day" />
    <pomo-timer class="timer"></pomo-timer>
  </section>
</template>

<style scoped>
section.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:lavender;

  img{
    height: 600px;
    width: 600px;
    padding: 20px 5px 10px 40px;
  }
}

  .timer{
    height: 600px;
    width: 800px;
  }
</style>
