import React from "react";

export default function DisplayPokemon({ pokemonList: { name } }) {
  //   const [object] = pokemonList;
  //   //   const { name, id } = object;
  //   console.log(pokemonList);
  //   console.log(object);
  //   let { name } = object;
  //   console.log(name);
  return (
    <div>
      <h2>Pokemon name is{name}</h2>
    </div>
  );
}
