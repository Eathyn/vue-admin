<template>
  <div>home</div>
  <div>count: {{ count }}</div>
  <el-button type="primary">button</el-button>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const { count } = store.state.countModule
</script>
