<script setup>
</script>

<template>
  <section class="container">
    <section class="entrance">
      <h1>Enchantis Towne</h1>
      <div class="welcomepic"></div>
      <h3>Welcome to Enchantis Towne New Neighbor!</h3>
      <p>Enchantis is still a new currently developing town but no fret! We have
    a couple of spots perfect for you! Whether or not you're here to study or just to pass the time
    we hope these current places can help your stay here relaxing!</p>
  </section>

    <section class="scenes">
      <img src="../assets/cafe/daytime.jpg" alt="Cafe">
      <img src="../assets/library/libraryday.jpg" alt="Library">
      <img src="../assets/bedroom/roomday.jpg" alt="stand-in2">
    </section>
  </section>

</template>

<style scoped>
section.container{
  background-color:cornsilk;
}
section.entrance{
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

section.scenes{
  display: flex;
  justify-content:center;
  align-items: center;
  gap:20px;

  img{
    height:180px;
    width:180px;
  }
}

/*Overrides for tablet and up*/
@media screen and (min-width:800px){
  section.scenes{
    img{
      height:250px;
      width:250px;
    }
  }
}

/*Overrides for desktop and up*/
@media screen and (min-width:1200px){
  section.scenes{
    img{
      height:400px;
      width:400px;
    }
  }
}
</style>
