<script setup>
</script>

<template>
  <div class="title">
    <h3>Clock or Timer?</h3>
  </div>

  <div class="scenes">
    <div class="clock">
      <img src="../assets/Enchantris-Clock.jpg" alt="Clock Screen" />
    </div>
    <div class="timer">
      <img src="../assets/Enchantris-Timer.jpg" alt="Timer Screen" />
    </div>
  </div>

  <div class="buttons">
    <a href="http://localhost:5173/real-time-clock-customize">
      <button class="clockcreation">Real-Time Clock</button>
    </a>
    <a href="http://localhost:5173/timer-customize">
      <button class="timercreation">Timer</button>
    </a>
  </div>
</template>

<style scoped>
div.title{
  display:flex;
  justify-content: center;
  align-items: center;
}
div.buttons{
  display:flex;
  justify-content: center;
  align-items: center;
  gap:300px;
  padding-bottom:30px;
}
div.scenes{
  display: flex;
  justify-content: center;
  align-items: center;
  gap:20px;
  div.clock{
    img{
      height:400px;
      width:400px;
    }
  }
  div.timer{
    img{
      height:400px;
      width:400px;
    }
  }
}

</style>
