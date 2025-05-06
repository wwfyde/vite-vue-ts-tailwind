<script setup lang="ts">
/**
 * 一、Vue 3 的设计理念
 * --------------------
 * 1. 响应性系统升级为 Proxy 替代 Object.defineProperty
 * 2. Composition API 更好支持逻辑复用与 TypeScript
 * 3. 支持 Fragment、Teleport、Suspense 等高级特性
 * 4. 性能优化，Tree-shaking 更友好，默认支持异步组件
 */

import { withDefaults, defineProps, ref } from 'vue'

const count = ref(0)

interface Props {
  title: string
  count?: number
}

// 设置默认值
const props = withDefaults(defineProps<Props>(), {
  count: 122
})
// const count = () 
</script>

<template>
  <h1>{{ title }}</h1>
  <p>当前计数：{{ count }}</p>
  <button @click="count++">+1</button>
  <button @click="count--">-1</button>
</template>