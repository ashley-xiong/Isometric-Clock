<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar></NavBar>

  <section>
    <router-view></router-view>
  </section>

  <footer>
    <p>Enchantis Towne 2025</p>
  </footer>
</template>

<style scoped>

footer{
  background:peachpuff;
  height:30px;
  display:flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  padding-bottom:20px;
}
</style>
