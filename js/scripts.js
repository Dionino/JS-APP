var pokemonRepository = (function () {
  var repository = [];

  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function (pokemon) {
      showModal(pokemon);
    })
  };

  // Creates new elements to add into the DOM
  function addListItem(pokemon) {
    var $listItem = document.createElement('li');
    var $button = document.createElement('button');
    $button.innerText = pokemon.name;
    $button.classList.add('pokemon_button');
    $listItem.appendChild($button);
    $Pokedex.appendChild($listItem);
    $button.addEventListener('click', function(event) {
      showDetails(pokemon);
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
        console.log(pokemon);
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
      return item
    }).catch(function (e) {
      console.error(e);
    });
  };

  function showModal(pokemon) {
    var $modalPokemon = document.querySelector('#modal-pokemon');

    $modalPokemon.innerHTML = '';

    var modal = document.createElement('div');

    modal.classList.add('modal');

    var closeButtonElement = document.createElement('button');

    closeButtonElement.classList.add('modal-close');

    closeButtonElement.innerText = 'Close';

    closeButtonElement.addEventListener('click', hideModal);

    var nameElement = document.createElement('h1');
    nameElement.innerText = pokemon.name;

    var imageElement = document.createElement('img');
    imageElement.classList.add('modal-img');
    imageElement.setAttribute("src", pokemon.imageUrl);

    var heightElement = document.createElement('p');
    heightElement.innerText = pokemon.height;


    modal.appendChild(closeButtonElement);
    modal.appendChild(nameElement);
    modal.appendChild(heightElement);
    modal.appendChild(imageElement);
    $modalPokemon.appendChild(modal);

    $modalPokemon.classList.add('is-visible');
  };

  function hideModal() {
    var $modalPokemon = document.querySelector('#modal-pokemon');
    $modalPokemon.classList.remove('is-visible');
  };

  window.addEventListener('keydown', (e) => {
    var $modalPokemon = document.querySelector('#modal-pokemon');
    if (e.key === 'Escape' && $modalPokemon.classList.contains('is-visible')) {
      hideModal();
    }
  });

  var $modalPokemon = document.querySelector('#modal-pokemon');
  $modalPokemon.addEventListener('click', (e) => {
    var target = e.target;
    if (target === $modalPokemon) {
      hideModal();
    }
  });

  // Objects returning outside the IIFE

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal
  };

})(); // IIFE ends here

var $Pokedex = document.querySelector('.Pokedex');

pokemonRepository.loadList().then(function(pokemon) {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  })
});
