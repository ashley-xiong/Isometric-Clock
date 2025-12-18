<script setup>
import { ref } from 'vue'

let cafeImage = ref('daytime.jpg')

const setCafeImage = (image) => {
  cafeImage.value = image
}


</script>

<template>
  <section class="button-customize-top">
    <div class="one-option">
      <a href="../views/ClockCustomizers/ClockCustomizeCafeDay.vue"></a>
      <p>Cafe</p>
    </div>
    <div class="two-option">
      <p>Library</p>
    </div>
    <div class="three-option">
      <p>Bedroom</p>
    </div>
  </section>

  <div class="customizer">
    <div class="cafe-day">
      <img :src="`../src/assets/cafe/${cafeImage}`" alt="Cafe in the Day" />
    </div>
  </div>

  <section class="button-customize-bottom">
    <div class="day-option" @click="setCafeImage('daytime.jpg')">
      <p>Daytime</p>
    </div>
    <div class="night-option" @click="setCafeImage('nighttime.jpg')">
      <p>Nighttime</p>
    </div>
  </section>

</template>

<style scoped>
section.button-customize-top {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 55px 5px 10px 10px;
  text-align: center;
  cursor: pointer;

  div.one-option {
    background-color: blanchedalmond;
    width: 100px;
    border-radius: 18px;
  }

  div.two-option {
    background-color: blanchedalmond;
    width: 100px;
    border-radius: 18px;
  }

  div.three-option {
    background-color: blanchedalmond;
    width: 100px;
    border-radius: 18px;
  }
  div.one-option:hover, div.two-option:hover, div.three-option:hover {
    background-color: lavenderblush;
  }
}

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

section.button-customize-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 5px 8px 48px 20px;
  text-align: center;
  cursor: pointer;


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
