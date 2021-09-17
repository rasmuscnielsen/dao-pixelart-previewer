import dataDevelopers from '../data/developers.js'
import dataTraits from '../data/traits.js'
import {ref, reactive} from 'vue'

export default function usePreviewState() {
    const developer = ref(1)
    const traits = reactive({})

    function updateDeveloper() {
        // Loop through all developers until a full trait match is found
        const _developer = dataDevelopers.find(_developer => {
            let match = true

            dataTraits.forEach(trait => {
                if (match && _getTraitSlugFromName(trait, _developer[trait.id]) !== traits[trait.slug]) {
                    match = false
                }
            })

            return match
        })

        // Apply developer id. Otherwise reset.
        developer.value = _developer
            ? _developer.id
            : null
    }

    function updateTraits() {
        // Find developer matching id.
        const _developer = dataDevelopers.find(dev => parseInt(dev.id) === parseInt(developer.value))

        // If found developer from current id, apply trait values. Otherwise reset.
        dataTraits.forEach(trait => {
            traits[trait.slug] = _developer
                ? _getTraitSlugFromName(trait, _developer[trait.id])
                : null
        })
    }

    function _getTraitSlugFromName(trait, name) {
        return trait.values.find(value => value.name === name).slug
    }

    // Initialize
    dataTraits.forEach(trait => traits[trait.slug] = null)

    updateTraits()

    return {
        dataTraits,
        developer,
        traits,
        updateDeveloper,
        updateTraits,
    }
}