<script setup>
import Customization from '@/components/Customization.vue'

</script>

<template>
  <section class="container">
    <customization></customization>
    <div class="customizer">
      <div class="cafe-day">
        <img src="../../assets/test.jpg" alt="Room Day"/>
        <img src="../../assets/test.jpg" alt="Room Night"/>
      </div>
    </div>
    <div class="content">
      <div class="day-option">
        <a href="http://localhost:5173/real-time-clock-cd">
          <p>Daytime</p>
        </a>
      </div>
      <div class="night-option">
        <a href="http://localhost:5173/real-time-clock-cn">
          <p>Nighttime</p>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.container {
  background-color:lightblue;

  div.customizer {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 400px;
      width: 400px;
      padding: 20px 5px 10px 40px;
    }
  }

  div.content{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding: 5px 8px 48px 20px;
    text-align: center;
    cursor: pointer;
  }
  div.day-option {
    background-color: blanchedalmond;
    width: 100px;
    padding: 5px;
    border-radius: 18px;
  }

  div.night-option {
    background-color: blanchedalmond;
    width: 100px;
    padding: 5px;
    border-radius: 18px;
  }

  div.day-option:hover, div.night-option:hover {
    background-color: lavenderblush;
  }
}
</style>
