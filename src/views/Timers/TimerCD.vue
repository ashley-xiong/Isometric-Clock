<script setup>
import PomoTimer from '@/components/PomoTimer.vue'
import mute from '@/components/mute/mute.vue'
import unmute from '@/components/mute/unmute.vue'
import { ref } from 'vue'

const bgm = ref(null)
const isPlaying = ref(false)

const toggleMusic = async () => {
  if (!bgm.value) return

  if (isPlaying.value) {
    bgm.value.pause()
  } else {
    await bgm.value.play()
  }

  isPlaying.value = !isPlaying.value
}
</script>

<template>
  <section class="container">
    <mute class="nomusicnote"></mute>
    <unmute class="musicnote" @click="toggleMusic"></unmute>
    <img src="../../assets/cafe/daytime.jpg" alt="Cafe in the Day" />
    <pomo-timer class="timer"></pomo-timer>
    <audio ref="bgm" loop>
      <source
        src="../../assets/music/cafemday.mp3"
        type="audio/mpeg"
      />
    </audio>
  </section>
</template>

<style scoped>
section.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: mistyrose;

  .musicnote {
    align-self: flex-end;
    background-color: palevioletred;
    border-radius: 20px;
    width: 40px;
    height: 40px;
  }

  img {
    height: 450px;
    width: 450px;
    padding: 20px 5px 10px 40px;
  }
}

.timer {
  height: 600px;
  width: 500px;
}

@media screen and (min-width:800px){
  section.container{
    img{
      width: 600px;
      height: 600px;
    }

    .timer {
      height: 600px;
      width: 700px;
    }
  }
}

@media screen and (min-width:1200px){
  section.container{
    img{
      width: 700px;
      height: 700px;
    }

    .timer {
      height: 600px;
      width: 800px;
    }
  }
}
</style>
