<script setup lang="ts">
import { onMounted } from 'vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import HomeView from './views/HomeView.vue'
import { getHello } from '@/api/hello'

onMounted(() => {
  getHello().then((res) => {
    console.log(res)
  })
})
</script>

<template>
  <router-view />

  <!-- <DefaultLayout> -->
  <!-- <HomeView /> -->
  <!-- </DefaultLayout> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
