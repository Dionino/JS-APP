var repository = [
  {name: "Bulbasaur", height: 2.04, types: ["Grass", "Poison"]},
  {name: "Ivysaur", height: 3.03, types: ["Grass", "Poison"]},
  {name: "Venusaur", height: 6.07, types: ["Grass", "Poison"]},
  {name: "Charmender", height: 2.00, types: ["Fire"]},
  {name: "Charmeleon", height: 3.07, types: ["Fire"]},
  {name: "Charizard", height: 5.07, types: ["Fire", "Flying"]},
  {name: "Squirtle", height: 1.08, types: ["Water"]},
  {name: "Wartortle", height: 3.03, types: ["Water"]},
  {name: "Blastoise", height: 5.03, types: ["Water"]}
];

repository.forEach(function(pokemonDetails){
  if (pokemonDetails.height >= 6.07) {
  document.write('name:' + ' ' + pokemonDetails.name + ', ' + '(height:' + ' ' + pokemonDetails.height + ') ' + '- Wow that\'s big!' + '<br>' + 'types:' + ' ' + pokemonDetails.types + '<br>' + '<br>')
}else {
  document.write('name:' + ' ' + pokemonDetails.name + ', ' + '(height:' + ' ' + pokemonDetails.height + ') ' + '<br>' + 'types:' + ' ' + pokemonDetails.types + '<br>' + '<br>')
}
});
