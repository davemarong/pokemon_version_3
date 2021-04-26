import React, { useState, useContext } from "react";
import PokemonContext from "../context/pokemonContext";
import HandlePokemonStats from "./HandlePokemonStats";

export default function DisplayPokemon() {
  const { pokemonState, pokemonStatsState } = useContext(PokemonContext);
  const [pokemon, setPokemon] = pokemonState;
  const [pokemonStats, setPokemonStats] = pokemonStatsState;
  const {
    name,
    id,
    height,
    sprites: { front_default: img },
    types: [
      {
        type: { name: type1 },
      },
    ],
    type2,
  } = pokemon;
  //PS = PokemonStats
  const { namePS, idPS, heightPS, imgPS, type1PS, type2PS } = pokemonStats;
  const {
    handlePokemonStatsName,
    handlePokemonStatsImg,
    handlePokemonStatsId,
    handlePokemonStatsHeight,
    handlePokemonStatsTypes1,
    handlePokemonStatsTypes2,
  } = HandlePokemonStats();
  return (
    <div>
      <div>
        <button onClick={handlePokemonStatsName}>Name</button>
        <div>{namePS ? <div>{name}</div> : <div>...</div>}</div>
      </div>
      <div>
        <button onClick={handlePokemonStatsId}>Id</button>
        <div>{idPS ? <div>{id}</div> : <div>...</div>}</div>
      </div>
      <div>
        <button onClick={handlePokemonStatsHeight}>Height</button>
        <div>{heightPS ? <div>{height}</div> : <div>...</div>}</div>
      </div>
      <div>
        <button onClick={handlePokemonStatsImg}>Img</button>
        <div>{imgPS ? <img src={img} /> : <div>...</div>}</div>
      </div>
      <div>
        <button onClick={handlePokemonStatsTypes1}>Type1</button>
        <div>{type1PS ? <div>{type1}</div> : <div>...</div>}</div>
      </div>
      <div>
        <button onClick={handlePokemonStatsTypes2}>Type2</button>
        <div>{type2PS ? <div>{type2}</div> : <div>...</div>}</div>
      </div>
    </div>
  );
}
