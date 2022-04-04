import React from 'react'
import "./Pokecard.css"
interface PokecardProps{
  name:string|undefined;
  spriteurl?:string
}
const Pokecard = ({name, spriteurl}:PokecardProps) => {
  return (
    <div className='pokecard'>
        <img src={spriteurl} alt="Pokemon" className='pokemon'/>
        <p>
          {name}
        </p>
    </div>
  )
}

export default Pokecard