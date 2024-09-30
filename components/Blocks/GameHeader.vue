<template>
    <header
        class="flex flex-col md:flex-row justify-between items-center mb-4 p-4 bg-gray-800 text-white rounded-lg shadow-md">
        <h1 class="text-4xl font-bold mb-2 md:mb-0">Deal or No Deal</h1>
        <div class="flex flex-col md:flex-row items-center space-x-4 mb-2 md:mb-0">
            <p class="text-lg">Maletín del jugador: <span class="font-semibold">{{ gameState.playerBox?.id }}</span></p>
            <p class="text-lg">Ronda: <span class="font-semibold">{{ gameState.currentRound }}</span></p>
            <p class="text-lg">{{ gameState.gameInstructions }}</p>
        </div>
        <div class="flex space-x-2">
            <button
                class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                @click="startNewGame">New Game</button>
            <button
                class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                @click="advanceGame">GO</button>
        </div>
    </header>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const gameState = inject('gameState')
const startNewGame = inject('startNewGame')
const advanceGame = inject('advanceGame')
</script>
