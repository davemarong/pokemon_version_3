import React from "react";
import DisplayPokemon from "./DisplayPokemon";

export default function FetchPokemon({ pokemonList }) {
  const randomNumber = Math.floor(Math.random() * 151) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
  fetch(url).then((res) => {
    res.json().then((result) => {
      pokemonList.push(result);
    });
  });
  const pika = {
    name: "pika",
  };
  console.log(pokemonList);
  const [pokemon] = pokemonList;
  console.log(pokemon);
  console.log("hei");

  return (
    <>
      <DisplayPokemon pokemonList={pokemonList} />
    </>
  );
}
