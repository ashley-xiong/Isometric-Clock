<script setup>

</script>

<template>
  <div class="entrance">
    <h1>Enchantis Towne</h1>
    <div class="welcomepic"></div>
    <h3>Welcome to Enchantis Towne New Neighbor!</h3>
    <p>Enchantis is still a new currently developing town but no fret! We have
    a couple of spots perfect for you! Whether or not you're here to study or just to pass the time
    we hope these current places can help your stay here relaxing!</p>
  </div>

  <div class="scenes">
    <div class="cafe"></div>
    <div class="library"></div>
    <div class="bedroom"></div>
  </div>

  <div class="buttons">
    <button class="clockcreation">Let's Travel!</button>
    <button class="timercreation">I wanna Study...</button>
  </div>
</template>

<style scoped>
div.entrance{
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    font-size:50px;
    font-family:"Marker Felt", fantasy;
  }
  p{
    text-align:center;
    padding:10px 50px;
  }
  div.welcomepic{
    height:200px;
    width:400px;
    background-color:mediumaquamarine;
    border-radius:50px;
  }
}
div.scenes{
  display: flex;
  flex-wrap: wrap;
  gap:20px;
  div.cafe{
    height:200px;
    width:200px;
    background-color:mediumaquamarine;
    border-radius:50px;
  }
  div.library{
    height:200px;
    width:200px;
    background-color:mediumaquamarine;
    border-radius:50px;
  }
  div.bedroom{
    height:200px;
    width:200px;
    background-color:mediumaquamarine;
    border-radius:50px;
  }
}

div.buttons{
  display:flex;
  justify-content: center;
  align-items: center;
  gap:30px;
  flex-wrap:wrap;
}
</style>
