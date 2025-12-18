<script setup>
import CurrentClock from '@/components/CurrentClock.vue'
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
    <img src="../../assets/cafe/daytime.jpg" alt="Cafe in the Day"/>
    <current-clock class="clock" />
    <audio ref="bgm" loop>
      <source
        src="https://cdn.pixabay.com/audio/2023/07/22/audio_720626056a.mp3"
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
  background-color: lightyellow;

  .musicnote {
    align-self: flex-end;
    background-color: palevioletred;
    border-radius: 20px;
    width: 40px;
    height: 40px;
  }

  img {
    height: 400px;
    width: 400px;
    padding: 20px 5px 10px 40px;
  }

  .clock {
    color: pink;
  }
}
</style>
