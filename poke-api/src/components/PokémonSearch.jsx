import { useState } from 'react';

const PokémonSearch = ({ setSearchTerm }) => {
    const [newSearchTerm, setNewSearchTerm] = useState('')
  
    const handleChange = (event) => {
      setNewSearchTerm(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setSearchTerm(newSearchTerm);
      setNewSearchTerm('');
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