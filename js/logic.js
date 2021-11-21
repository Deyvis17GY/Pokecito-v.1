async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  return data;
}

async function init() {
  const Pokemon = await getPokemon(150);
  updatePokemon(Pokemon);
}
init();
function updatePokemon(pokemon) {
  window.image.setAttribute('src', pokemon.sprites.front_default);
  window.pokemon.textContent = pokemon.name;
}

window.search.addEventListener('keyup', async () => {
  if (window.search.value == '0' || window.search.value == '') {
    const Pokemon = await getPokemon(25);
    updatePokemon(Pokemon);
  } else {
    const Pokemon = await getPokemon(window.search.value);
    updatePokemon(Pokemon);
  }
});
