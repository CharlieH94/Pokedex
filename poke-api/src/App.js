import './App.css';
import logo from './pokeball.svg';
import { useState } from 'react';
import Header from './components/Header';
import PokémonSearch from './components/PokémonSearch';
import PokéList from './components/PokéList';

function App() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  if (searchTerm === null) {
    fetch(`https://pokeapi.co/api/v2/pokedex/1/`)
      .then(response => response.json())
      .then(data => {
        const randomNum = Math.floor(Math.random() * 1011);
        const namesArray = data.pokemon_entries.map(pokemon => pokemon.pokemon_species.name);
        setSearchTerm(namesArray[randomNum]);
        setInitialLoading(false);
      });
  }

  return initialLoading ? (
    <div className='App'>
      < p className='loading'> Booting Pokédex...</p >
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    )
        : (
    <div className="App">
      <Header />
      <PokémonSearch setSearchTerm={setSearchTerm} />
      <PokéList searchTerm={searchTerm} />
    </div>
  );
}

export default App;



