<template>
  <div>home</div>
  <div>count: {{ count }}</div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const count = store.state.countModule.count
</script>
