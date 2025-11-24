<script setup lang="ts">
</script>

<template>
  <section class="button-customize-top">
    <div class="one-option">
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
      <img src="../assets/Cafe-Image.jpg" alt="Cafe in the Day" />
    </div>
  </div>

  <section class="button-customize-bottom">
    <div class="day-option">
      <p>Daytime</p>
    </div>
    <div class="night-option">
      <p>Nighttime</p>
    </div>
  </section>

  <div class="begin-button">
    <p>Start!</p>
  </div>

</template>

<style scoped>
section.button-customize-top {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 55px 5px 10px 10px;
  text-align: center;

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
}

div.begin-button{
  padding-bottom:50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: blanchedalmond;
  border-radius: 18px;
}
</style>
