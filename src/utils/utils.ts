export const getUrlImage = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
}

export const getPokemonId = (url: string) => {
    return Number(url.split('/')[6])
}