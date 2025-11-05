<script setup>

</script>

<template>
  <section class="web-app-container">
    <header>
      <nav>
        <router-link :to="{name: 'Home'}">Home</router-link> /
        <router-link :to="{name: 'RealTimeClockCustom'}">Real World Clock</router-link>
      </nav>
    </header>
  </section>

  <section>
    <router-view></router-view>
  </section>

  <footer>
    Enchantis Towne 2025
  </footer>
</template>

<style scoped>
section.web-app-container {
  display:flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid red;
  width:100%;
}
footer{
  border: 3px solid red;
  display:flex;
  flex-direction: column;
  align-items: center;
  width:100%;
}
</style>
