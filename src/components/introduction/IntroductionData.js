import React, { useRef } from "react";

import guess from "../../assets/guess.mp4";
import hints from "../../assets/hints.mp4";
import nextPokemon from "../../assets/nextPokemon.mp4";

export default function IntroductionData() {
  const videoPlay0 = useRef(null);
  const videoPlay1 = useRef(null);
  const videoPlay2 = useRef(null);

  const introductionData = [
    {
      title: "Step 1: Hints",
      description: "Click on as many hint buttons as you want.",
      src: hints,
      ref: videoPlay0,
    },
    {
      title: "Step 2: Guess",
      description:
        "Take your guess. If you guess correctly, a new pokemon will be selected and you go again.",
      src: guess,
      ref: videoPlay1,
    },
    {
      title: "Next pokemon",
      description:
        "If you don't know the correct answer, simply click 'NEXT POKEMON' and a new pokemon will be selected.",
      src: nextPokemon,
      ref: videoPlay2,
    },
  ];
  return { introductionData };
}
