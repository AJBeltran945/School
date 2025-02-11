const pokedex = document.getElementById('pokedex');
let allPokemon = [];
let typeSprites = {};

async function fetchTypes() {
    const response = await fetch("https://pokeapi.co/api/v2/type");
    const data = await response.json();
    const typeSprites = {};

    for (const type of data.results) {
        const typeResponse = await fetch(type.url);
        const typeData = await typeResponse.json();

        // Access the sprite URL for the specific generation (VIII) and game (Brilliant Diamond and Shining Pearl)
        const spriteUrl = typeData.sprites?.["generation-viii"]?.["brilliant-diamond-and-shining-pearl"]?.name_icon;

        if (spriteUrl) {
            typeSprites[type.name] = spriteUrl;
        }
    }

    return typeSprites; // If you want to return the result
}


async function fetchPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000");
    const data = await response.json();
    const pokemonList = data.results;

    const promises = pokemonList.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        return res.json();
    });

    allPokemon = await Promise.all(promises);
    allPokemon.forEach(displayPokemon);
}

function displayPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    // Create type images
    const typeImages = pokemon.types.map(t => {
        const typeName = t.type.name;
        console.log(typeSprites[typeName])
        return `<img src="${typeSprites[typeName]}" alt="${typeName}" class="type-icon">`;
    }).join('');

    card.innerHTML = `
        <h3>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <div class="types">${typeImages}</div>
    `;

    pokedex.appendChild(card);
}


function filterPokemon() {
    const search = document.getElementById('search').value.toLowerCase();
    pokedex.innerHTML = '';
    allPokemon.filter(pokemon => pokemon.name.includes(search)).forEach(displayPokemon);
}

fetchTypes(); // Fetch the types first
fetchPokemon();
