<script setup>

</script>

<template>
  <div class="stuff">
    <div class="logo"></div>

    <div class="links">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
      <a href="#">Link 5</a>
    </div>
  </div>
</template>

<style scoped>
div.stuff{
  display: flex;
  flex-direction: column;
  gap:20px;
  align-items: center;
  div.logo{
    height:200px;
    width:200px;
    background-color:mediumaquamarine;
    border-radius:100px;
  }
}
</style>
