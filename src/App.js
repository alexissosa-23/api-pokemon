import React, { useState } from 'react';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=807");
      const data = await response.json();
      setPokemonList(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
