import React, { useState, useContext } from "react";
import PokemonContext from "../context/pokemonContext";
export default function UserGuess() {
  const { pokemonState, pokemonStatsState, userGuessState } = useContext(
    PokemonContext
  );
  const [pokemon, setPokemon] = pokemonState;
  const [pokemonStats, setPokemonStats] = pokemonStatsState;
  const [userGuess, setUserGuess] = userGuessState;
  const [correct, setCorrect] = useState(false);
  const handleUserGuess = (event) => {
    setUserGuess(event.target.value);
  };
  const handleCheckAnswer = () => {
    console.log(userGuess, pokemon.name);
    if (userGuess === pokemon.name) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };
  return (
    <div>
      <div>
        <input onChange={handleUserGuess} type="text" />
        <button onClick={handleCheckAnswer}>Submit</button>
      </div>
      <div>
        <div>{correct ? <div>Correct!</div> : ""}</div>
      </div>
    </div>
  );
}
