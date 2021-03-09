import React, { useState } from "react";

export default function GeussingField({ hintList, pokemonArray }) {
  const [nameHint, setNameHint] = useState("...");
  const [type1Hint, setType1Hint] = useState("...");
  const [type2Hint, setType2Hint] = useState("...");
  const [idHint, setIdHint] = useState("...");
  const [genHint, setGenHint] = useState("...");

  const { name, type1, type2, id, generation } = hintList;
  return (
    <>
      <section>
        <div>
          <span>Name:</span>
          <span>{nameHint}</span>
          <button onClick={() => setNameHint("bulbasaur")}>Show</button>
        </div>
        <div>
          <span>Type 1:</span>
          <span>{type1Hint}</span>
          <button onClick={() => setType1Hint("bulbasaur")}>Show</button>
        </div>
        <div>
          <span>Type 2:</span>
          <span>{type2Hint}</span>
          <button onClick={() => setType2Hint("bulbasaur")}>Show</button>
        </div>
        <div>
          <span>Id:</span>
          <span>{idHint}</span>
          <button onClick={() => setIdHint("bulbasaur")}>Show</button>
        </div>
        <div>
          <span>Generation:</span>
          <span>{genHint}</span>
          <button onClick={() => setGenHint("bulbasaur")}>Show</button>
        </div>
      </section>
    </>
  );
}
