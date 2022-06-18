const getPokemonUrl = id  => `https://pokeapi.co/api/v2/pokemon/${id}`

   const generatepokemonPromises = () => Array(150).fill().map((_, index) =>
     fetch(getPokemonUrl(index + 1)).then(response => response.json()))
     
     const generateHTML = pokemons => pokemons.reduce ((accumulator, {name, id, types}) =>{
      const elementTypes = types.map(typeInfo => typeInfo.type.name)

      accumulator += `
    <li class="card ${elementTypes[0]}"  
      <li class="card-image" alt="${name}" scr="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprite/pokemon/${id}.png"/>
      <h2 class="card-title">${id}. ${name}</h2>
      <p class="card-subtitle">${elementTypes.join ('|')}</p>
      </li>
       `
       return accumulator

     }, '')

     const insertPokemonsIntoPage = pokemons => {
      const ul = document.querySelector('[data-"pokedex]')
      ul.innerHTML = pokemons
     }

     const pokemonPromises = generatepokemonPromises()

