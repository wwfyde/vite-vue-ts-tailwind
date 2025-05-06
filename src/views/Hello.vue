<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'

const message: Ref<string> = ref('Hello, World!')
const count: Ref<number> = ref(0)
const increment = () => {
  count.value++
}
const decrement = () => {
  count.value--
}
const reset = () => {
  count.value = 0
}
const rawHtml: Ref<string> = ref('<strong>This is bold text</strong>')
</script>

<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold text-gray-900 mb-6">
      <span>Message: {{ message }}</span>
    </h1>
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <p class="text-xl text-gray-600 mb-8">Counter: {{ count }}</p>
    <button @click="increment" class="bg-blue-500 text-white px-4 py-2 rounded">Increment</button>
    <button @click="decrement" class="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded ml-4">Decrement</button>
    <button @click="reset" class="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded ml-4">Reset</button>
  </div>
</template>
