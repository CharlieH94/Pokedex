import { useState } from 'react';

const PokémonSearch = ({ setSearchTerm }) => {
    const [newSearchTerm, setNewSearchTerm] = useState('')
  
    const handleChange = (event) => {
      setNewSearchTerm(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetch(`https://pokeapi.co/api/v2/pokedex/1/`)
      .then(response => response.json())
      .then(data => {
        const namesArray = data.pokemon_entries.map(pokemon => pokemon.pokemon_species.name);
        if (!isEntryValid(newSearchTerm, namesArray)) {
          console.log("Handle your invalid entries better!")
          // add invalid name/number input handling stuff here
          alert("Invalid Pokédex Entry!")
          setNewSearchTerm('');
        } else {
          setSearchTerm(newSearchTerm);
          setNewSearchTerm('');
        }
      });
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor='pokemon-input'>Search Pokédex:</label>
        <input id='pokemon-input' value={newSearchTerm} onChange={handleChange} placeholder='e.g. Charmander, 151'></input>
        <button type='submit'>Go!</button>
      </form>
    )
}
  
export default PokémonSearch;

function isEntryValid(entry, array) {
  return array.includes(entry.toLowerCase()) || (entry > 0 && entry <= array.length);
}