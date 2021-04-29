import "./css/app.css";
import React, { useState } from "react";
import Hints from "./components/hints/Hints";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { PokemonProvider } from "./components/context/pokemonContext";
import DisplayPokemon from "./components/displayPokemon/DisplayPokemon";
import fetchPokemon from "./components/fetchPokemon/FetchPokemonData";
import UserGuess from "./components/quessfield/UserGuess";
import AllPokemon from "./components/allPokemon/AllPokemon";
import SelectGeneration from "./components/selectGeneration/SelectGeneration";
import Container from "@material-ui/core/Container";
import Chart from "./components/chart/Chart";
import BarChart from "./components/chart/BarChart";
export default function App() {
  const [url, setUrl] = useState({ firstNumber: 1, secondNumber: 151 });
  const [userGuess, setUserGuess] = useState();
  const [userStats, setUserStats] = useState({
    guesses: 0,
    totalHints: 0,
    imageHints: 0,
    correct: 0,
    wrong: 0,
  });
  const [startGame, setStartGame] = useState(false);
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemonStats, setPokemonStats] = useState({
    namePS: false,
    idPS: false,
    heightPS: false,
    imgPS: false,
    type1PS: false,
    type2PS: false,
  });
  const [pokemon, setPokemon] = useState({
    name: "",
    id: "",
    height: "",
    types: [
      {
        type: {
          name: "",
        },
      },
      {
        type: {
          name: "Only 1 type",
        },
      },
    ],
    sprites: {
      front_default: "",
    },
  });
  return (
    <div>
      <PokemonProvider
        value={{
          pokemonState: [pokemon, setPokemon],
          pokemonStatsState: [pokemonStats, setPokemonStats],
          userGuessState: [userGuess, setUserGuess],
          allPokemonState: [allPokemon, setAllPokemon],
          userStatsState: [userStats, setUserStats],
          urlState: [url, setUrl],
        }}
      >
        <Container maxWidth="sm">
          <SelectGeneration />
          <Grid container justify="center" spacing={4}>
            {startGame ? (
              <Grid item>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    let pokedata = { ...pokemon, answer: "wrong" };
                    setAllPokemon([pokedata, ...allPokemon]);
                    fetchPokemon(
                      pokemon,
                      setPokemon,
                      setPokemonStats,
                      setAllPokemon,
                      allPokemon,
                      url
                    );
                  }}
                >
                  Next pokemon
                </Button>
              </Grid>
            ) : (
              <Grid item>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    setStartGame(true);
                    fetchPokemon(
                      pokemon,
                      setPokemon,
                      setPokemonStats,
                      setAllPokemon,
                      allPokemon,
                      url
                    );
                  }}
                >
                  Start
                </Button>
              </Grid>
            )}
          </Grid>

          <Hints />
          <DisplayPokemon />
          <UserGuess />
          <BarChart />
          <AllPokemon />
        </Container>
      </PokemonProvider>
    </div>
  );
}
