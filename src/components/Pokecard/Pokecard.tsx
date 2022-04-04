import React from 'react'
import "./Pokecard.css"
interface PokecardProps{
  name:string;
  spriteurl?:string;
  onPokemonClick:(pokemonName:string) => void;
}
const Pokecard = ({name, spriteurl, onPokemonClick}:PokecardProps) => {
  return (
    <div className='pokecard' onClick={() => onPokemonClick(name)}>
        <img src={spriteurl} alt="Pokemon" className='pokemon'/>
        <p>
          {name}
        </p>
    </div>
  )
}

export default Pokecard