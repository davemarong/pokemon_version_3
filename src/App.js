import "./css/app.css";

import React, { useState, useEffect } from "react";
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
import Test from "./Test";

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
  useEffect(() => {
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
  }, []);
  return (
    <div className="background">
      <Test />
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
          <Grid container justify="center" spacing={0}>
            <Grid item>
              <Button
                className="main_button marginButton"
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
          </Grid>

          <Hints />
          <Grid
            container
            direction="row"
            justify="center"
            alignContent="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={12} md={6}>
              <DisplayPokemon />
            </Grid>
            <Grid item xs={12} md={6}>
              <UserGuess />
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignContent="flex-start"
              alignItems="flex-start"
            >
              <Grid
                container
                justify="center"
                item
                xs={12}
                md={4}
                style={{
                  paddingLeft: 16,
                  paddingRight: 16,
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <AllPokemon />
              </Grid>
              <Grid
                container
                justify="center"
                item
                xs={12}
                md={4}
                style={{
                  paddingLeft: 16,
                  paddingRight: 16,
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <BarChart />
              </Grid>
              <Grid
                container
                justify="center"
                item
                xs={12}
                md={4}
                style={{
                  paddingLeft: 16,
                  paddingRight: 16,
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <SelectGeneration />
              </Grid>
            </Grid>
          </Grid>
          {/* </Container> */}
        </SnackbarProvider>
      </PokemonProvider>
    </div>
  );
}
