<script setup>
import {ref} from "vue"
import DeveloperPreview from "./components/DeveloperPreview.vue"

const developerId = ref(1)
</script>

<template>
    <div class="bg-white border-b border-gray-100 py-6 text-center">
        <div class="inline-flex items-center space-x-4">
            <label for="developerNo">Search developer #</label>
            <input id="developerNo" type="number" class="rounded-lg py-2 px-4 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Type number" v-model="developerId">
        </div>
    </div>

    <div class="mt-4 w-full flex items-center justify-center">
        <DeveloperPreview :id="developerId" />
    </div>
</template>
