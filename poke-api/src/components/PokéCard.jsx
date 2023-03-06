import Stats from './Stats';

const PokéCard = ({ pokémon }) => {

    const capitaliser = (str) => {
        const result = str.charAt(0).toUpperCase()
        + str.slice(1)
        return result;
      }

    return (
        <div>
            <h2 id='poke-name'>{`#${pokémon.id} ${capitaliser(pokémon.name)}`}</h2>
            <div id='stats'>
                <figure><img src={pokémon.sprites.other["official-artwork"].front_default} alt={pokémon.species.name} /></figure>
                <figcaption>        
                    <p>Height:<br/>{pokémon.height}</p>
                    <p>Weight:<br/>{pokémon.weight}</p>
                </figcaption>
            </div>
            <h3>Base Stats:</h3>
            <Stats pokémon={pokémon} />
        </div>
    )
}

export default PokéCard;