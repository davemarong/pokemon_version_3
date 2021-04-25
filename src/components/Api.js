import React, { useState, useEffect } from "react";

export default function Api() {
  const [state, setState] = useState();

  fetch("https://pokeapi.co/api/v2/pokemon/3")
    .then((res) => res.json())
    .then((data) => setState(data));

  return <div></div>;
}
