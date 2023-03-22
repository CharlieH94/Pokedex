import { useState, useEffect } from 'react';
import PokéCard from './PokéCard'
import logo from '../pokeball.svg';

const PokéList = ({searchTerm}) => {
    const [pokémon, setPokémon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
        .then(response => response.json())
            .then(data => {
                setPokémon(data);
                setIsLoading(false);
        })
    }, [searchTerm]);

  return isLoading ? (
    <div id='loading-screen'>
      <p className='loading'>Loading Pokémon Data...</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
        : (
      <section>
        <div id='result-header'>
          <div className='mini-icon red small'></div>  
          <h2>Results:</h2>
          <div className='mini-icon red small'></div>  
        </div>
        <div className='result-box'>
            <PokéCard pokémon={pokémon} />
        </div>
        <div id='result-footer'>
            <div className='mini-icon red left'></div>  
            <div id='speaker'>
                <div className='speaker-line'></div>
                <div className='speaker-line'></div>
                <div className='speaker-line'></div>
                <div className='speaker-line'></div>
            </div>
        </div>
      </section>
    )
  }

export default PokéList;