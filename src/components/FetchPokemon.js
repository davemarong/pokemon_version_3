import React, { useEffect } from "react";

export default function FetchPokemon({
  pokemon,
  setPokemon,
  setAllPokemon,
  allPokemon,
}) {
  useEffect(() => {
    const fetchOnePokemon = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data);
    };
    let randomNumber = Math.floor(Math.random() * 152) + 1;
    fetchOnePokemon(`https://pokeapi.co/api/v2/pokemon/`);
  }, [allPokemon]);
  console.log(pokemon.types[0].type.name);

  return <div>hei</div>;
}
