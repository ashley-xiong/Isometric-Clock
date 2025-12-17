<script setup>
</script>

<template>
  <h3>Clock or Timer?</h3>

  <section class="Clock">
    <img src="../assets/Enchantris-Clock.jpg" alt="Clock Screen" />
    <a href="http://localhost:5173/real-time-clock-customize">
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
h3{
  display:flex;
  justify-content: center;
  align-items: center;
}

section.Clock{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;

  img{
    height:500px;
    width:500px;
  }
}

section.Timer{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;

  img{
    height:500px;
    width:500px;
  }
}

button.clockcreation{
  display: flex;
  flex-direction: column;
  align-items:center;
}

button.timercreation{
  display: flex;
  flex-direction: column;
  align-items:flex-start;
}


</style>
