import Stats from './Stats';

const PokéCard = ({ pokémon }) => {

    const capitaliser = (str) => {
        const result = str.charAt(0).toUpperCase()
        + str.slice(1)
        return result;
      }

    const typeColouriser = (str) => {
        const colours = {
            normal: '#A8A77A',
            fire: '#EE8130',
            water: '#6390F0',
            electric: '#F7D02C',
            grass: '#7AC74C',
            ice: '#96D9D6',
            fighting: '#C22E28',
            poison: '#A33EA1',
            ground: '#E2BF65',
            flying: '#A98FF3',
            psychic: '#F95587',
            bug: '#A6B91A',
            rock: '#B6A136',
            ghost: '#735797',
            dragon: '#6F35FC',
            dark: '#705746',
            steel: '#B7B7CE',
            fairy: '#D685AD',
        };

        return { backgroundColor: colours[str] };
    };

    
    return (
        <div className='result-content'>
            <h2 id='poke-name'><em>{`#${pokémon.id}`}</em> {capitaliser(pokémon.name)}</h2>
            <div id='stats'>
                <figure><img src={pokémon.sprites.other["official-artwork"].front_default} alt={pokémon.species.name} /></figure>
                <figcaption>        
                    <h3 className='gb-font'>Base Stats</h3>
                    <Stats pokémon={pokémon} />
                </figcaption>
            </div>
            <div className='result-footer'>
                <ul>
                    {pokémon.types.map(slot => {
                        return <li style={typeColouriser(slot.type.name)}>{slot.type.name}</li>
                    })}
                </ul>
                <div className='statbox'>
                    <div className='box-left statbox__child'>
                        <p className='statbox--top'>Height:</p>
                        <p className= 'statbox--bottom'>Weight:</p>
                    </div>
                    <div className='box-right statbox__child'><p className='statbox--top'>{pokémon.height}</p>
                        <p className='statbox--bottom'>{pokémon.weight}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokéCard;