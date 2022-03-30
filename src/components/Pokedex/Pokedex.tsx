import React from 'react'
import "./Pokedex.css"
export default function Pokedex() {
  return (
    <div className='pokedex-container'>
      <div className='pokelist-container'>
        <p>Pokeon list</p>
      </div>
      <div className='pokedex-search-result-container'>
        <p>Search result</p>
      </div>
    </div>
  )
}
