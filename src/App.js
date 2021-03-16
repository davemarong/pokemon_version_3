import React from "react";

export default function App() {
  let promise = fetch("https://pokeapi.co/api/v2/pokemon/mew");
  console.log(promise);
  async function pokemon() {
    const response = await promise;
    console.log(response);
    const result = await response;
    console.log(result);
  }
  pokemon();
  return <div></div>;
}
