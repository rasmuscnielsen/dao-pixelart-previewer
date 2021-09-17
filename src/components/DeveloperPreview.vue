<script setup>
import {computed, ref} from 'vue'
import developers from '../developers'

const props = defineProps({
    id: Number
})

function slugify(name) {
    return name.toLowerCase().replaceAll(' ', '').replaceAll('&', '').replaceAll('+', '')
}

const layers = computed(() => {
    const developer = developers.find(dev => parseInt(dev.id) === parseInt(props.id))

    const os = 'https://user-images.githubusercontent.com/51840990/133480481-16adbf7c-7c3d-4e35-aa9a-31e354564681.png';
    const computer = 'https://user-images.githubusercontent.com/51840990/133295766-b126eda3-d798-4dd0-89f1-825a52c574d1.png';
    const flag = 'https://user-images.githubusercontent.com/51840990/133310175-2a2eb58f-be74-44f8-9d9d-2ef8fcf0f82f.png'
    const background = 'https://user-images.githubusercontent.com/51840990/133120337-84e6a624-4f58-42ba-8733-1ac9d4b39d71.png'

    return developer
        ? [background, os, computer, flag]
        : null
})

const count = ref(0)
</script>

<template>
    <div>
<!--        <h1 class="font-bold text-lg">Developer #{{ props.id }}</h1>-->

        <div class="relative w-full overflow-hidden" v-if="layers" style="padding-top: 120%">
            <img
                v-for="layer in layers"
                class="absolute top-0 left-0 w-full"
                :key="layer"
                :src="layer"
            />
        </div>

        <div class="mt-4" v-else>
            NOT FOUND
        </div>
    </div>
</template>