import React from 'react'
import { PokemonSchema } from '../../types/PokemonSchema'
import Pokecard from '../Pokecard/Pokecard'
import "./Pokelist.css"

interface PokelistProps{
  pokemons: PokemonSchema[],
  onPokemonClick:(pokemonName:string) => void;
}
const Pokelist = ({pokemons, onPokemonClick}:PokelistProps) => {
  return (
    <div className='pokelist'>
      {
        pokemons.map((pokemon) => {
          return (
            pokemon.name &&
            <Pokecard
              onPokemonClick={onPokemonClick}
              key={pokemon.id}
              name={pokemon.name}
              spriteurl={pokemon.sprites.normal}/>
          );
        })
      }
    </div>
  )
}

export default Pokelist