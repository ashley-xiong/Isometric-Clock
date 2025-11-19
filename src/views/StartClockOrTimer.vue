<script setup>
</script>

<template>
  <div class="title">
    <h3>Choose your setting!</h3>
  </div>

  <div class="scenes">
    <div class="cafe">
      <img src="../assets/Cafe-Image.jpg" alt="Cafe" />
    </div>
    <div class="library">
      <img src="../assets/Cafe-Image.jpg" alt="stand-in" />
    </div>
  </div>

  <div class="buttons">
    <a href="http://localhost:5173/real-time-clock-customize">
      <button class="clockcreation">Real-Time Clock</button>
    </a>
    <button class="timercreation">Timer</button>
  </div>
</template>

<style>
div.title{
  display:flex;
  justify-content: center;
  align-items: center;
}
div.buttons{
  display:flex;
  justify-content: center;
  align-items: center;
  gap:40px;
}
div.scenes{
  display: flex;
  justify-content: center;
  align-items: center;
  gap:20px;
  div.cafe{
    img{
      height:300px;
      width:300px;
    }
  }
  div.library{
    img{
      height:300px;
      width:300px;
    }
  }
}

</style>
