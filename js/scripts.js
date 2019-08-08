var pokemonRepository = (function () {
  var repository = [
  {name: "Bulbasaur", height: 2.04, types: ["Grass", "Poison"]},
  {name: "Ivysaur", height: 3.03, types: ["Grass", "Poison"]},
  {name: "Venusaur", height: 6.07, types: ["Grass", "Poison"]},
  {name: "Charmender", height: 2.00, types: ["Fire"]},
  {name: "Charmeleon", height: 3.07, types: ["Fire"]},
  {name: "Charizard", height: 5.07, types: ["Fire", "Flying"]},
  {name: "Squirtle", height: 1.08, types: ["Water"]},
  {name: "Wartortle", height: 3.03, types: ["Water"]},
  {name: "Blastoise", height: 5.03, types: ["Water"]}];

  function add(pokemon) {
    if (typeof(pokemon) === 'object') {
    repository.push(pokemon);
  } else {
    console.log('Please use the correct format: {name: "string", height: (number), types: ["string"]}');
  }
};

  function getAll() {
      return repository;
    }

    return {
      add: add,
      getAll: getAll
    };
})();

var pokemonDetails = pokemonRepository.getAll();

var $Pokedex = document.querySelector('.Pokedex');

pokemonDetails.forEach(function(pokemonDetails){
  var $listItem = document.createElement('li');
  var $button = document.createElement('button');
  $button.innerText = pokemonDetails.name;
  $button.classList.add('pokemon_button');
  $listItem.appendChild($button);
  $Pokedex.appendChild($listItem);
  $button.addEventListener('click', function showDetails(pokemon) {
    console.log(pokemonDetails.name);
  })
});
