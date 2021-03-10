import React, { useState } from "react";

export default function Hintfield({ selectedPokemon, choosePokemon }) {
  const [nameState, setNameState] = useState("");
  const [pokedexState, setPokedexState] = useState("");
  const [generationState, setGenerationState] = useState("");
  const [type1State, setType1State] = useState("");
  const [type2State, setType2State] = useState("");
  const {
    Name,
    Pokedex,
    Generation,
    Type: { Type1, Type2 },
  } = selectedPokemon[0];
  return (
    <>
      <button onClick={choosePokemon}>Start</button>
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
        <span>Type 1:</span>
        <button
          onClick={() => {
            setType1State(Type1);
          }}
        >
          Show hint
        </button>
        <span>{type1State}</span>
      </div>
      <div>
        <span>Type 2:</span>
        <button
          onClick={() => {
            setType2State(Type2);
          }}
        >
          Show hint
        </button>
        <span>{type2State}</span>
      </div>
    </>
  );
}
