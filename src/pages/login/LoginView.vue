<template>
  <h1>Store</h1>
  <p>
    Main store name：{{ mainStore.name }}
    <br />
    Name length: {{ mainStore.nameLength }}
    <br />
    <NButton type="info" @click="updateName">Store name</NButton>
  </p>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'
import { NButton } from 'naive-ui'

const mainStore = useMainStore()

const updateName = () => {
  mainStore.$patch({
    name: 'This is a test name',
  })
}
</script>
