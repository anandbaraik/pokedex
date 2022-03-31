import React from 'react'
import "./PokeSearchResult.css";
export default function PokeSearchResult() {
  const selectedPoke = true;
  return (
    <div className='poke-result-card'>
        {
          selectedPoke 
          ? (
            <div>
              <p>
                  Name: Pokemon
              </p>
              <p>
                  Id: 250
              </p>
              <p>
                  Height: 500
              </p>
              <p>
                  Weight: 200
              </p>
              <p>
                  Base Exp: 20
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
