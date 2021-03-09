import React from "react";
import Header from "./Header";
import FetchPokemon from "./FetchPokemon";
import DisplayPokemon from "./DisplayPokemon";

export default function App() {
  let pokemonList = [
    // {
    //   id: "",
    //   name: "",
    //   type1: "",
    //   type2: "",
    //   order: "",
    // },
  ];

  function fetch() {
    const randomNumber = Math.floor(Math.random() * 151) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/2`;
    console.log(url);
    const pokemon = fetch(url).then((res) => {
      res.json().then((result) => {
        return result;
      });
    });

    console.log(pokemon);
  }
  return (
    <>
      <Header />
      <FetchPokemon pokemonList={pokemonList} fetch={fetch} />
    </>
  );
}
