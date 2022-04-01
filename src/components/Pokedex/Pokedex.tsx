import React from 'react'
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import SearchBox from '../SearchBox/SearchBox'
import "./Pokedex.css"
export default function Pokedex() {
  return (
    <div className='pokedex-container'>
      <div className='pokelist-container'>
      <SearchBox/>
        <p>Pokeon list</p>
      </div>
      <div className='pokedex-search-result-container'>
        <PokeSearchResult/>
      </div>
    </div>
  )
}
