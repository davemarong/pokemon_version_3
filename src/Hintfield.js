import React, { useState } from "react";

export default function Hintfield({ selectedPokemon }) {
  const [nameState, setNameState] = useState("");
  const [pokedexState, setPokedexState] = useState("");
  const [generationState, setGenerationState] = useState("");

  const { Name, Pokedex, Generation } = selectedPokemon;
  console.log(Name);
  return (
    <>
      <div>
        <span>Name:</span>
        <button
          onClick={() => {
            setNameState(Name);
          }}
        >
          Show hint
        </button>
        <span>{nameState}</span>
      </div>
      <div>
        <span>Id:</span>
        <button
          onClick={() => {
            setPokedexState(Pokedex);
          }}
        >
          Show hint
        </button>
        <span>{pokedexState}</span>
      </div>
      <div>
        <span>Generation:</span>
        <button
          onClick={() => {
            setGenerationState(Generation);
          }}
        >
          Show hint
        </button>
        <span>{generationState}</span>
      </div>
      <div>
        <span></span>
        <button>Show hint</button>
        <span></span>
      </div>
      <div>
        <span></span>
        <button>Show hint</button>
        <span></span>
      </div>
    </>
  );
}
