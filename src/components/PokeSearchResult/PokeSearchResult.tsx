import React from 'react'
import { PokemonSchema } from '../../types/PokemonSchema';
import "./PokeSearchResult.css";

interface PokeSearchResultProps{
  selectedPokemon:PokemonSchema | undefined;
}
export default function PokeSearchResult({selectedPokemon}:PokeSearchResultProps) {
  const {name, id, height, weight, base_experience, sprites} = selectedPokemon || {};
  return (
    <div className='poke-result-card'>
        {
          selectedPokemon 
          ? (
            <div>
              <img src={sprites?.animated || sprites?.normal} alt="Pokemon" className='pokemon-animated-sprite'/>
              <p>
                  Name: {name}
              </p>
              <p>
                  Id: {id}
              </p>
              <p>
                  Height: {height}
              </p>
              <p>
                  Weight: {weight}
              </p>
              <p>
                  Base Exp: {base_experience}
              </p>
            </div>
          ) : (
            <h2>
              Welcome to the Pokedex
            </h2>
          )
        }
    </div>
  )
}
