import React from 'react'
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import "./Pokedex.css"
export default function Pokedex() {
  return (
    <div className='pokedex-container'>
      <div className='pokelist-container'>
        <p>Pokeon list</p>
      </div>
      <div className='pokedex-search-result-container'>
        <PokeSearchResult/>
      </div>
    </div>
  )
}
