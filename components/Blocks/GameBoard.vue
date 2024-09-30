<template>
    <div class="w-full grid grid-cols-6 gap-4">
        <Box v-for="(box, index) in gameState.boxes" :key="index" :box="box" @select="openBox" />
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Box from './Box.vue'

const gameState = inject('gameState')
const openBox = inject('openBox')
</script>
