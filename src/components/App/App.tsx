import {Component} from 'react';
import { render } from 'react-dom';
import { pokemonData } from '../../data/pokeData';
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from '../../types/PokemonSchema';
import Pokedex from '../Pokedex/Pokedex';

import './App.css';

export interface AppState {
  searchField: string;
  allPokemons: PokemonSchema[];
  searchedPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
}

class App extends Component<any, AppState> {
  state = {
    searchField: "",
    allPokemons: [],
    searchedPokemons: [],
    selectedPokemon: undefined,
  };

  patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
    const patchedPokemons = pokemons.map((pokemon) => {
        let parsedSprites: PokemonSpritesSchema = {
            normal: undefined,
            animated: undefined,
        };

        try {
            parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
        } catch (e) {
            console.log("Exception while parsing sprites: ", e);
        }

        const patchedPokemon: PokemonSchema = {
            ...pokemon,
            sprites: parsedSprites,
        };

        return patchedPokemon;
    });

    return patchedPokemons;
};

  componentDidMount() {
    // patch the stringified pokemons
    const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
        pokemonData
    );
    
    this.setState({
        allPokemons: patchedPokemons,
        searchedPokemons: patchedPokemons,
    });
  }
  render() {
    return (
      <div className='app'>
        <h1>Pokedex</h1>
        <Pokedex/>
      </div>
    )
  }
}

export default App;
