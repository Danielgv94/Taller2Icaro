let lista = document.getElementById("PokemonList");

function consultarpokemon(id, num) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(function (response) {
    response.json().then(function (pokemon) {
      crearPokemon(pokemon, num);
    });
  });
}

function consultarpokemones() {
  let primerID = Math.round(Math.random() * 150);
  let segundoID = Math.round(Math.random() * 150);

  consultarpokemon(primerID, 1);
  consultarpokemon(segundoID, 2);
}
function crearPokemon(pokemon, num) {
  console.log(pokemon, num);
  let item = lista.querySelector(`#pokemon_${num}`);
  let imagen = item.getElementsByTagName("img")[0];
  imagen.setAttribute("src", pokemon.sprites.front_default);

  let nombre = item.getElementsByTagName("p")[0];
  nombre.textContent = pokemon.name;
}

consultarpokemones();
