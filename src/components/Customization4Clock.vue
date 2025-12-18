<script setup>

</script>

<template>
  <section class="button-customize-top">
    <div class="one-option">
      <a href="http://localhost:5173/real-time-clock-customize-cafe">
        <p>Cafe</p>
      </a>
    </div>
    <div class="two-option">
      <a href="http://localhost:5173/real-time-clock-customize-library">
        <p>Library</p>
      </a>
    </div>
    <div class="three-option">
      <a href="http://localhost:5173/real-time-clock-customize-room">
        <p>Bedroom</p>
      </a>
    </div>
  </section>
</template>

<style scoped>
section.button-customize-top {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 55px 5px 10px 10px;
  text-align: center;
  cursor: pointer;

  a{
    text-decoration: none;
    font-weight: bold;
    color:burlywood;
  }

  div.one-option {
    background-color: rosybrown;
    width: 100px;
    border-radius: 18px;
  }

  div.two-option {
    background-color: rosybrown;
    width: 100px;
    border-radius: 18px;
  }

  div.three-option {
    background-color: rosybrown;
    width: 100px;
    border-radius: 18px;
  }
  div.one-option:hover,
  div.two-option:hover,
  div.three-option:hover {
    background-color:navajowhite;
  }
}

</style>
