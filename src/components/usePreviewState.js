import developers from "../developers";

export const traits = buildTraitMap()

function buildTraitMap() {
    const traitsList = Object.keys(developers[0]).filter(trait => trait !== 'id')
    let traitsMap = {}

    developers.forEach(developer => {
        traitsList.forEach(trait => {
            const traitSlug = slugify(trait)
            const traitValueSlug = slugify(developer[trait])

            if (traitsMap[traitSlug] == null) {
                traitsMap[traitSlug] = {
                    slug: traitSlug,
                    name: titleCase(trait),
                    values: {}
                }
            }

            if (traitsMap[traitSlug].values[traitValueSlug] == null) {
                traitsMap[traitSlug].values[traitValueSlug] = {
                    slug: traitValueSlug,
                    name: developer[trait]
                }
            }
        })
    })


    return Object
        .values(traitsMap)
        .sort(by('name'))
        .map(({ slug, name, values }) => {
            return {
                slug,
                name,
                values: Object.values(values).sort(by('name'))
            }
        })
}

function slugify(name) {
    return name.toLowerCase().replaceAll(' ', '').replaceAll('&', '').replaceAll('+', '')
}

function by(key) {
    return (a,b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0)
}

function titleCase(text) {
    const result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}