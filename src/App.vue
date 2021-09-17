<script setup>
import {ref} from "vue"
import DeveloperPreview from "./components/DeveloperPreview.vue"
import DaoLogo from "./components/DaoLogo.vue";
import PreviewControls from "./components/PreviewControls.vue";

const developerId = ref(1)
</script>

<template>
    <div class="min-h-screen flex">
        <div class="w-2/5 bg-white flex flex-col items-center space-y-10 py-10 px-4">
            <DaoLogo class="w-32 h-32 block mx-auto rounded-full shadow-md" />

            <PreviewControls class="w-full max-w-xs" />
        </div>

        <div class="w-3/5 bg-gray-100 border-l border-gray-200 flex items-center justify-center">
            <DeveloperPreview
                :id="developerId"
                class="w-full max-w-md"
            />
        </div>
    </div>


<!--    <div class="bg-white border-b border-gray-100 py-6 text-center">-->
<!--        <div class="inline-flex items-center space-x-4">-->
<!--            <label for="developerNo">Search developer #</label>-->
<!--            <input id="developerNo" type="number" class="rounded-lg py-2 px-4 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Type number" v-model="developerId">-->
<!--        </div>-->
<!--    </div>-->

<!--    <div class="mt-4 w-full flex items-center justify-center">-->
<!--        <DeveloperPreview :id="developerId" />-->
<!--    </div>-->
</template>
