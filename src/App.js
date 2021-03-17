import React from "react";

export default function App() {
  let allPokemon = [];
  async function pokemon() {
    for (let i = 1; i < 3; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const result = await response.json();
      allPokemon.push(result);
    }
  }
  const newpokoem = [{ hei: "hei" }, { ja: "ja" }];
  pokemon();
  console.log(allPokemon);
  console.log(newpokoem);
  return (
    <>
      <div>
        {allPokemon.map((pokemon) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))}
      </div>
      {/* <div>{allPokemon[0].name}</div> */}
    </>
  );
}
