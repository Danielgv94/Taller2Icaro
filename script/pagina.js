let prueba2 = document.getElementById("searchpokemon");

function buscarpokemones() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${prueba2.value}`).then(function (
    response
  ) {
    response.json().then(function (pokemon) {
      cuadropokemones(pokemon.name, pokemon.sprites.front_default);
    });
  });
}

let prueba = document.getElementById("buttonpokemon");
prueba.addEventListener("click", buscarpokemones);

function cuadropokemones(name, img) {
  console.log(name, img);

  let myImage = document.getElementById("imagenespoke");

  myImage.src = img;
  console.log(myImage);

  let nombrepoke = document.getElementById("pokenombre");
  nombrepoke.innerText = name;
}
