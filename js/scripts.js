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
    return repository.push(pokemon);
  }

  function getAll() {
      return repository;
    }

    return {
      add: add,
      getAll: getAll
    };
})();

var pokemonDetails = pokemonRepository.getAll();

pokemonDetails.forEach(function(allPokemon){
  if (allPokemon.height >= 6.07) {
  document.write('name:' + ' ' + allPokemon.name + ', ' + '(height:' + ' ' + allPokemon.height + ') ' + '- Wow that\'s big!' + '<br>' + 'types:' + ' ' + allPokemon.types + '<br>' + '<br>')
}else {
  document.write('name:' + ' ' + allPokemon.name + ', ' + '(height:' + ' ' + allPokemon.height + ') ' + '<br>' + 'types:' + ' ' + allPokemon.types + '<br>' + '<br>')
}
});
