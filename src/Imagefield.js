import React from "react";

export default function Imagefield({ selectedPokemon }) {
  return (
    <div>
      <img src={selectedPokemon[0].Src}></img>
    </div>
  );
}
