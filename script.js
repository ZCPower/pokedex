const poke_container = document.getElementById('poke-container');
const pokemon_count = 898;
const colors = {
    fire: '#F05030',
    grass: '#78c850',
    electric: '#F8d030',
    water: '#6890f0',
    rock: '#b8a038',
    ground: '#e0c068',
    fairy: '#EE99AC',
    poison: '#F85888',
    bug: '#A8B820',
    dragon: '#7038f8',
    psychic: '#9749E0',
    fighting: '#C03028',
    flying: '#A890f0',
    normal: '#f5f5f5',
    steel: '#B8b8d0',
    ghost: '#706898',
    dark: '#705848',
    ice: '#98d8d8'
}

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document. createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    id = pokemon.id.toString().padStart(3, '0');

    const poke_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type];

    pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="bulbasaur">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>`

    pokemonEl.innerHTML = pokemonInnerHTML;

    poke_container.appendChild(pokemonEl);
}

fetchPokemons()