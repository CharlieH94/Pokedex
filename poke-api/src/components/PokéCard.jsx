const PokéCard = ({pokémon}) => {
    return (
        <div key={pokémon.id}>
            <h2>{pokémon.name}</h2>
            <figure><img src={pokémon.sprites.other["official-artwork"].front_default} alt={pokémon.species.name} /></figure>
            <figcaption>        
                    
            </figcaption>
        </div>
    )
}

export default PokéCard;