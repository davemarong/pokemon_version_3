import React, { useState } from "react";
import Api from "./components/Api";
import FetchPokemon from "./components/FetchPokemon";
import Hints from "./components/Hints";

export default function App() {
  const [pokemon, setPokemon] = useState({});
  const [allPokemon, setAllPokemon] = useState([]);
  return (
    <>
      <Api />
      {/* <FetchPokemon
        pokemon={pokemon}
        setPokemon={setPokemon}
        allPokemon={allPokemon}
        setAllPokemon={setAllPokemon}
      /> */}
      {/* <Hints pokemon={pokemon} /> */}
    </>
  );
}
