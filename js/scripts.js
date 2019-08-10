var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    })
  };

  function addListItem(pokemon) {
    var $listItem = document.createElement('li');
    var $button = document.createElement('button');
    $button.innerText = pokemon.name;
    $button.classList.add('pokemon_button');
    $listItem.appendChild($button);
    $Pokedex.appendChild($listItem);
    $button.addEventListener('click', function(event) {
      console.log(pokemon.name);
    })
  };

  function getAll() {
    return repository;
  }

  function add(pokemon) {
    if (typeof(pokemon) === 'object') {
      repository.push(pokemon);
    } else {
      console.log('Please use the correct format: {name: "string", height: (number), types: ["string"]}');
    }
  };

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  };

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  };

  // Objects returning outside the IIFE

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})(); // IIFE ends here

var $Pokedex = document.querySelector('.Pokedex');

pokemonRepository.loadList().then(function(pokemon) {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  })
});
