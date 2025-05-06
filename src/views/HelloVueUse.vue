<script setup lang="ts">
import { useCounter, useMouse } from '@vueuse/core'

const { x, y } = useMouse()
const { count, inc, dec } = useCounter()
</script>
<template>
  <div>
    <h3>Mouse: {{ x }} x {{ y }}</h3>
    <h3>
      Counter: {{ count }}

      <a @click="inc()" style="margin-right: 10px">+</a>
      <a @click="dec()">-</a>
    </h3>
  </div>
</template>
