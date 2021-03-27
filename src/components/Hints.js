import React from "react";

export default function Hints({ pokemon }) {
  console.log(pokemon);
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <div>{pokemon.id}</div>
      <img src={pokemon.sprites.front_default} />
      {/* <div>{pokemon.types[0].type.name}</div> */}
    </div>
  );
}
