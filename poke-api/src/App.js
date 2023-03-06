import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import PokémonSearch from './components/PokémonSearch';
import PokéList from './components/PokéList';

function App() {
  const [searchTerm, setSearchTerm] = useState('pikachu');

  return (
    <div className="App">
      <Header />
      <PokémonSearch setSearchTerm={setSearchTerm} />
      <PokéList searchTerm={searchTerm} />
    </div>
  );
}

export default App;



