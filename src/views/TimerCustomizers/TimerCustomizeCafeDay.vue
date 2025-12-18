<script setup>
import Customization from '@/components/Customization.vue'
</script>

<template>
  <section class="container">
    <customization></customization>
    <div class="begin-button">
      <a href="http://localhost:5173/timer">
        <p>Start!</p>
      </a>
    </div>
  </section>
</template>

<style scoped>
section.container {
  background-color:lightsteelblue;

  div.begin-button {
    padding-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
      text-align: center;
      background-color: blanchedalmond;
      border-radius: 10px;
      padding-top: 15px;
      width: 200px;
      height: 40px;
    }

    p:hover {
      background-color: lavenderblush;
    }

    a {
      text-decoration: none;
    }
  }
}
</style>
