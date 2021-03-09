import React from "react";
import ChoosePokemon from "./ChoosePokemon";
export default function Header({ pokemonArray }) {
  return (
    <div>
      <h1>Pokemon version 3</h1>
      <button>Start</button>
      <ChoosePokemon pokemonArray={pokemonArray} />
    </div>
  );
}
