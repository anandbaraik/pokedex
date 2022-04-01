import React from 'react'
import Pokecard from '../Pokecard/Pokecard'
import "./Pokelist.css"
const Pokelist = () => {
  return (
    <div className='pokelist'>
        <Pokecard/>
        <Pokecard/>
        <Pokecard/>
        <Pokecard/>
        <Pokecard/>
        <Pokecard/>
    </div>
  )
}

export default Pokelist