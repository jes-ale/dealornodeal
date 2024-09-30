<template>
    <div class="p-4 rounded-lg border-2 transition-all duration-300 ease-in-out"
        :class="[!box.opened ? 'text-black bg-gray-200 border-gray-300 hover:border-blue-500 hover:shadow-xl hover:cursor-pointer hover:bg-gray-400' : 'bg-gray-50 text-neutral-500']"
        @click="select">
        <div class="flex justify-center mb-2">
            <Icon icon="mdi:briefcase" class="text-3xl" />
        </div>
        <p v-if="box.opened" class="text-lg font-bold text-center"> ${{ box.value }}</p>
        <p v-else class="text-lg font-bold text-center">{{ box.id }}</p>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { defineProps, defineEmits } from 'vue'

const { box } = defineProps({
    box: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['select'])

function select() {
    // Emit the select event to the parent component
    if (!box.opened) {
        emit('select', box.id)
    }
}
</script>

<style scoped>
div {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    /* Tailwind's rounded-lg */
}
</style>
