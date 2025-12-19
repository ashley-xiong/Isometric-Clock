<script setup>

</script>

<template>
  <section class="navigation">
    <div class="links">
      <div class="home-link">
        <a href="http://localhost:5173">Home</a>
      </div>
      <div class="scene-link">
        <a href="http://localhost:5173/customizer-start">Create Scene</a>
      </div>
      <div class="enchantis-link">
        <a href="http://localhost:5173/enchantis">Enchantis</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.navigation{

  div.links{
    display: flex;
    padding-top:10px;

    div.home-link{
      font-family: "Bradley Hand", cursive;
      font-size:20px;
      width: 110px;
      height: 56px;
      padding-top:10px;
      margin: 0 auto;
      position: relative;
      background:peachpuff;
      text-align: center;

      :after{
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-bottom: 13px solid white;
        border-left: 55px solid transparent;
        border-right: 55px solid transparent;
      }
    }

    div.scene-link{
      font-family: "Bradley Hand", cursive;
      font-size:18px;
      width: 110px;
      height: 56px;
      padding-top:10px;
      margin: 0 auto;
      position: relative;
      background:peachpuff;
      text-align: center;

      :after{
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-bottom: 13px solid white;
        border-left: 55px solid transparent;
        border-right: 55px solid transparent;
      }
    }

    div.enchantis-link{
      font-family: "Bradley Hand", cursive;
      font-size:20px;
      width: 110px;
      height: 56px;
      padding-top:10px;
      margin: 0 auto;
      position: relative;
      background:peachpuff;
      text-align: center;

      :after{
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-bottom: 13px solid white;
        border-left: 55px solid transparent;
        border-right: 55px solid transparent;
      }
    }

    a{
      text-decoration:none;
      color:lightcoral;

    }

    div.home-link:hover, div.scene-link:hover, div.enchantis-link:hover{
      background-color:oldlace;
    }

  }
}
</style>
