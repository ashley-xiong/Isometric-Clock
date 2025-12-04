<script setup>
import CurrentClock from '@/components/CurrentClock.vue'
</script>

<template>
  <section class="container">
    <img src="../../src/assets/cafe/daytime.jpg" alt="Cafe in the Day" />
    <current-clock class="clock" />
  </section>
</template>

<style scoped>
section.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: mistyrose;

  img {
    height: 400px;
    width: 400px;
    padding: 20px 5px 10px 40px;
  }

  .clock {
    color: pink;
  }
}
</style>
