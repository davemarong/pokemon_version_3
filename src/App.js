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
import BarChart from "./components/chart/BarChart";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import { motion, useCycle } from "framer-motion";
import { SnackbarProvider } from "notistack";
import Slide from "@material-ui/core/Slide";

export default function App() {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
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
          animationState: [animation, cycleAnimation],
        }}
      >
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          TransitionComponent={Slide}
        >
          {/* <Container maxWidth="sm"> */}
          <Grid container justify="center" spacing={4}>
            {startGame ? (
              <Grid item>
                <Button
                  component={motion.div}
                  whileTap={{ scale: 1.2 }}
                  size="large"
                  variant="contained"
                  color="secondary"
                  endIcon={<ArrowForwardRoundedIcon />}
                  onClick={() => {
                    let pokedata = { ...pokemon, answer: "wrong" };
                    fetchPokemon(
                      pokemon,
                      setPokemon,
                      setPokemonStats,
                      setAllPokemon,
                      allPokemon,
                      url,
                      cycleAnimation
                    );
                    setAllPokemon([pokedata, ...allPokemon]);
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
                      url,
                      cycleAnimation
                    );
                  }}
                >
                  Start
                </Button>
              </Grid>
            )}
          </Grid>

          <Hints />
          <Grid
            container
            direction="row"
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <DisplayPokemon />
            </Grid>
            <Grid item xs={12} md={6}>
              <UserGuess />
            </Grid>

            <Grid
              container
              justify="center"
              alignContent="flex-start"
              alignItems="flex-start"
              item
              xs={12}
              md={6}
            >
              <AllPokemon />
            </Grid>
            <Grid
              container
              justify="center"
              alignContent="flex-start"
              alignItems="flex-start"
              item
              xs={12}
              md={6}
            >
              <BarChart />
            </Grid>
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center"
              item
              xs={12}
              md={12}
            >
              <SelectGeneration />
            </Grid>
          </Grid>
          {/* </Container> */}
        </SnackbarProvider>
      </PokemonProvider>
    </div>
  );
}
