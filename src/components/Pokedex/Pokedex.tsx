import React from 'react'
import { PokemonSchema } from '../../types/PokemonSchema'
import Pokelist from '../Pokelist/Pokelist'
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import SearchBox from '../SearchBox/SearchBox'
import "./Pokedex.css"
interface PokedexPops{
  pokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
  onPokemonClick: (pokemonName:string) => void;
  onInputChange:(inputValue:string) => void;
}
export default function Pokedex({pokemons, selectedPokemon, onPokemonClick, onInputChange}:PokedexPops) {
  return (
    <div className='pokedex-container'>
      <div className='pokelist-container'>
      <SearchBox onInputChange={onInputChange}/>
      <Pokelist pokemons={pokemons} onPokemonClick={onPokemonClick}/>
      </div>
      <div className='pokedex-search-result-container'>
        <PokeSearchResult selectedPokemon={selectedPokemon}/>
      </div>
    </div>
  )
}
