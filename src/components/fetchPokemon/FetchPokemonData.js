import React, { useState, useContext } from "react";
import axios from "axios";
const fetchPokemon = (
  pokemon,
  setPokemon,
  setPokemonStats,
  setAllPokemon,
  allPokemon,
  url
) => {
  const randomNumber = Math.floor(
    Math.random() * (url.secondNumber - url.firstNumber + 1) + url.firstNumber
  );
  const fullUrl = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
  let correct = "correct";
  axios.get(fullUrl).then((result) => {
    const pokemonData = result.data;
    if (pokemonData.types.length === 2) {
      setPokemon({
        ...pokemonData,
        type2: pokemonData.types[1].type.name,
      });
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
