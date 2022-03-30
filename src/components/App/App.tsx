import {Component} from 'react';
import Pokedex from '../Pokedex/Pokedex';

import './App.css';

class App extends Component {
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
