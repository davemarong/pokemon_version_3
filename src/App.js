import React, { useState } from "react";
import Hints from "./components/hints/Hints";
import { PokemonProvider } from "./components/context/pokemonContext";
import DisplayPokemon from "./components/displayPokemon/DisplayPokemon";
import fetchPokemon from "./components/fetchPokemon/FetchPokemonData";
import UserGuess from "./components/quessfield/UserGuess";
export default function App() {
  const [userGuess, setUserGuess] = useState();
  const [pokemonStats, setPokemonStats] = useState({
    namePS: false,
    idPS: false,
    heightPS: false,
    imgPS: false,
    type1PS: false,
    type2PS: false,
  });
  const [pokemon, setPokemon] = useState({
    name: "",
    id: "",
    height: "",
    types: [
      {
        type: {
          name: "",
        },
      },
      {
        type: {
          name: "Only 1 type",
        },
      },
    ],
    sprites: {
      front_default: "",
    },
  });
  return (
    <div>
      <PokemonProvider
        value={{
          pokemonState: [pokemon, setPokemon],
          pokemonStatsState: [pokemonStats, setPokemonStats],
          userGuessState: [userGuess, setUserGuess],
        }}
      >
        <button
          onClick={() => {
            fetchPokemon(setPokemon, setPokemonStats);
          }}
        >
          Start
        </button>
        <Hints />
        <DisplayPokemon />
        <UserGuess />
      </PokemonProvider>
    </div>
  );
}
