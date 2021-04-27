import React, { useState } from "react";
import Hints from "./components/hints/Hints";
import { PokemonProvider } from "./components/context/pokemonContext";
import DisplayPokemon from "./components/displayPokemon/DisplayPokemon";
import fetchPokemon from "./components/fetchPokemon/FetchPokemonData";
import UserGuess from "./components/quessfield/UserGuess";
import AllPokemon from "./components/allPokemon/AllPokemon";
export default function App() {
  const [userGuess, setUserGuess] = useState();
  const [allPokemon, setAllPokemon] = useState([]);
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
          allPokemonState: [allPokemon, setAllPokemon],
        }}
      >
        <button
          onClick={() => {
            fetchPokemon(
              pokemon,
              setPokemon,
              setPokemonStats,
              setAllPokemon,
              allPokemon
            );
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            setAllPokemon([...allPokemon, pokemon]);
            fetchPokemon(
              pokemon,
              setPokemon,
              setPokemonStats,
              setAllPokemon,
              allPokemon
            );
          }}
        >
          Next pokemon
        </button>
        <Hints />
        <DisplayPokemon />
        <UserGuess />
        <AllPokemon />
      </PokemonProvider>
    </div>
  );
}
