<script setup>

</script>

<template>
  <section class="web-app-container">
    <header>
      <nav>
        <router-link :to="{name: 'RealTimeClockCustom'}">Real World Clock</router-link>
      </nav>
    </header>
  </section>

<section>
  <router-view></router-view>
</section>

  <footer>
    This is a footer!
  </footer>
</template>

<style scoped></style>
