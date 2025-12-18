<script setup>
</script>

<template>
  <h3>Clock or Timer?</h3>

  <section class="Clock">
    <img src="../assets/Enchantris-Clock.jpg" alt="Clock Screen" />
    <a href="http://localhost:5173/real-time-clock-customize-cafe">
      <button class="clockcreation">Real-Time Clock</button>
    </a>
  </section>

  <section class="Timer">
    <img src="../assets/Enchantris-Timer.jpg" alt="Timer Screen" />
    <a href="http://localhost:5173/timer-customize">
      <button class="timercreation">Timer</button>
    </a>
  </section>
</template>

<style scoped>
h3 {
  display: flex;
  justify-content: center;
  align-items: center;
}

section.Clock {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    height: 600px;
    width: 600px;
  }
}

section.Timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    height: 600px;
    width: 600px;
  }
}

button{
  padding: 8px;
  margin-bottom: 30px;
}

/*Overrides for tablet and up*/
@media screen and (min-width:800px){
  section.Clock {
    float:left;
    padding:0 10px;
    img{
      height: 450px;
      width: 450px;
    }
  }

  section.Timer{
    float:right;
    gap:10px;
    img{
      height: 450px;
      width: 450px;
    }
  }
}

/*Overrides for desktop and up*/
@media screen and (min-width:1200px){
  section.Clock {
    float:left;
    padding-left:200px;
    img{
      height: 400px;
      width: 400px;
    }
  }

  section.Timer{
    float:right;
    padding-right:200px;
    img{
      height: 400px;
      width: 400px;
    }
  }
}
</style>
