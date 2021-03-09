import React from "react";

export default function ChoosePokemon({ pokemonArray }) {
  let pokemonInfo = [];

  function getNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }
  let number = getNumber();
  pokemonInfo.push(number);
  function getPokemon(x) {
    return pokemonArray[x];
  }
  let pokemon = getPokemon(number);

  pokemonInfo.push(pokemon);
  function pokeInfo() {
    return pokemonInfo;
  }
  return (
    <div>
      <h1></h1>
    </div>
  );
}
