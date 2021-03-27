import React, { useState } from "react";
import FetchPokemon from "./components/FetchPokemon";
import Hints from "./components/Hints";

export default function App() {
  const [pokemon, setPokemon] = useState({});
  const [allPokemon, setAllPokemon] = useState([]);
  return (
    <>
      <FetchPokemon
        pokemon={pokemon}
        setPokemon={setPokemon}
        allPokemon={allPokemon}
        setAllPokemon={setAllPokemon}
      />
      {/* <Hints pokemon={pokemon} /> */}
    </>
  );
}
