<script setup>
import developers from "../developers";

const traits = Object.keys(developers[0]).filter(trait => trait !== 'id')

let fileNames = {}

developers.forEach(developer => {
    traits.forEach(trait => {
        fileNames[slugify(trait) + '/' + slugify(developer[trait]) + '.svg'] = true
    })
})

function slugify(name) {
    return name.toLowerCase().replaceAll(' ', '').replaceAll('&', '').replaceAll('+', '')
}

const compiledList = Object.keys(fileNames).sort().join("\n")
</script>

<template>
    <textarea v-model="compiledList" class="w-full h-48"></textarea>
</template>