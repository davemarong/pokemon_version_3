import React, { useState, useContext } from "react";
import axios from "axios";
const fetchPokemon = (setPokemon, setPokemonStats) => {
  const randomNumber = Math.floor(Math.random() * 890);
  const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

  axios.get(url).then((result) => {
    console.log(result.data);
    const pokemonData = result.data;
    if (pokemonData.types.length === 2) {
      setPokemon({ ...pokemonData, type2: pokemonData.types[1].type.name });
    } else {
      setPokemon({ ...pokemonData, type2: "Only 1 type" });
    }
    setPokemonStats({
      namePS: false,
      idPS: false,
      heightPS: false,
      imgPS: false,
      type1PS: false,
      type2PS: false,
    });
  });
};
export default fetchPokemon;
