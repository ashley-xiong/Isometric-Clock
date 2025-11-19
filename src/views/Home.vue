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
    <div class="cafe">
      <img src="../assets/Cafe-Image.jpg" alt="Cafe">
    </div>
    <div class="library">
      <img src="../assets/Cafe-Image.jpg" alt="stand-in">
    </div>
    <div class="bedroom">
      <img src="../assets/Cafe-Image.jpg" alt="stand-in2">
    </div>
  </div>

<section class="Info-on-Pics">
  <div class="bakery-info">
    <h4>Rea's Bakery</h4>
    <p>A family owned business</p>
  </div>
</section>
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
  div.bedroom{
    img{
      height:300px;
      width:300px;
    }
  }
}
section.Info-on-Pics{
  display:flex;
  justify-content: center;

  div.bakery-info{
    background-color:darkseagreen;
  }
}
</style>
