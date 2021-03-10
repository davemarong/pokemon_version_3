import React, { useState } from "react";
import Header from "./Header";
import Guessingfield from "./Guessingfield";
import Hintfield from "./Hintfield";
import ButtonField from "./Buttonfield";
import ImageField from "./Imagefield";

export default function App() {
  const [pokemonState, setPokemonState] = useState();

  const pokemonArray = [
    {
      Type: {
        Type1: "Dark",
        Type2: "Rock",
      },
      Pokedex: "#248",
      Legendary: "No",
      EvStages: "3",
      FirstStage: "Larvitar",
      SecondStage: "Pupitar",
      Colors: {
        Primary: "Green",
        Secondary: "Blue/Black",
      },
      Generation: "2",
      Category: "Armor pokemon",
      Name: "Tyranitar",
      Src:
        "https://cdn.bulbagarden.net/upload/thumb/8/82/248Tyranitar.png/1200px-248Tyranitar.png",
    },
    {
      Type: {
        Type1: "Water",
        Type2: "Flying",
      },
      Pokedex: "#130",
      Legendary: "No",
      EvStages: "2",
      FirstStage: "Magikarp",
      Colors: {
        Primary: "Blue",
        Secondary: "Tan/White",
      },
      Generation: "1",
      Category: "Atrocious pokemon",
      Name: "Gyrados",
      Src: "https://cdn.bulbagarden.net/upload/4/41/130Gyarados.png",
    },
    {
      Type: {
        Type1: "Psychic",
        Type2: "Psychic",
      },
      Pokedex: "#064",
      Legendary: "No",
      EvStages: "3",

      FirstStage: "Abra",
      ThirdStage: "Alakazam",
      Colors: {
        Primary: "Yellow",
        Secondary: "Brown",
      },
      Generation: "1",
      Category: "Psi pokemon",
      Name: "Kadabra",
      Src: "https://cdn.bulbagarden.net/upload/9/97/064Kadabra.png",
    },
    {
      Type: {
        Type1: "Fire",
        Type2: "Bug",
      },
      Pokedex: "#637",
      Legendary: "No",
      EvStages: "2",

      FirstStage: "Larvesta",
      Colors: {
        Primary: "Red",
        Secondary: "Black/White",
      },
      Generation: "5",
      Category: "Sun pokemon",
      Name: "Volcarona",
      Src: "https://cdn.bulbagarden.net/upload/6/6b/637Volcarona.png",
    },
    {
      Type: {
        Type1: "Flying",
        Type2: "Psychic",
      },
      Pokedex: "#249",
      Legendary: "Yes",
      EvStages: "1",

      Colors: {
        Primary: "Silver",
        Secondary: "Lightblue/blue",
      },
      Generation: "2",
      Category: "Diving pokemon",
      Name: "Lugia",
      Src:
        "https://cdn.bulbagarden.net/upload/thumb/4/44/249Lugia.png/1200px-249Lugia.png",
    },
    {
      Type: {
        Type1: "Ghost",
        Type2: "Fire",
      },
      Pokedex: "#609",
      Legendary: "No",
      EvStages: "3",

      FirstStage: "Litwick",
      SecondStage: "Lampent",
      Colors: {
        Primary: "Purple",
        Secondary: "Black",
      },
      Generation: "5",
      Category: "Luring pokemon",
      Name: "Chandelure",
      Src: "https://cdn.bulbagarden.net/upload/6/65/609Chandelure.png",
    },
  ];

  let number;
  let selectedPokemon = {
    Name: "",
    Pokedex: "",
    Generation: "",
    Type: {
      Type1: "",
      Type2: "",
    },
  };
  function choosePokemon() {
    number = Math.floor(Math.random() * 5) + 1;
    selectedPokemon = pokemonArray[number];
    console.log(number);
    console.log(selectedPokemon);
  }

  return (
    <div>
      <Header />
      <Guessingfield />
      <Hintfield selectedPokemon={selectedPokemon} />
      <ButtonField />
      <ImageField />
    </div>
  );
}
