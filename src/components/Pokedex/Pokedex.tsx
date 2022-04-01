import React from 'react'
import Pokelist from '../Pokelist/Pokelist'
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import SearchBox from '../SearchBox/SearchBox'
import "./Pokedex.css"
export default function Pokedex() {
  return (
    <div className='pokedex-container'>
      <div className='pokelist-container'>
      <SearchBox/>
      <Pokelist></Pokelist>
      </div>
      <div className='pokedex-search-result-container'>
        <PokeSearchResult/>
      </div>
    </div>
  )
}
