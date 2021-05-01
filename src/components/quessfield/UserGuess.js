import React, { useState, useContext } from "react";
import PokemonContext from "../context/pokemonContext";
import fetchPokemon from "../fetchPokemon/FetchPokemonData";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";
import { useSnackbar } from "notistack";
import { motion, useCycle } from "framer-motion";
import { Card, Container } from "@material-ui/core";
export default function UserGuess() {
  const {
    pokemonState,
    pokemonStatsState,
    allPokemonState,
    userGuessState,
    userStatsState,
    urlState,
    animationState,
  } = useContext(PokemonContext);
  const [pokemon, setPokemon] = pokemonState;
  const [pokemonStats, setPokemonStats] = pokemonStatsState;
  const [allPokemon, setAllPokemon] = allPokemonState;
  const [userGuess, setUserGuess] = userGuessState;
  const [userStats, setUserStats] = userStatsState;
  const [url, setUrl] = urlState;
  const [animation, cycleAnimation] = animationState;

  const { guesses, wrong, correct } = userStats;
  const [correctGuess, setCorrectGuess] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleUserGuess = (event) => {
    setUserGuess(event.target.value);
  };
  const handleClick = () => {
    enqueueSnackbar("I love hooks");
  };
  const handleCheckAnswer = () => {
    if (userGuess) {
      if (userGuess.toLowerCase() === pokemon.name) {
        setCorrectGuess(true);
        enqueueSnackbar("Thats correct!", {
          variant: "success",
          autoHideDuration: 3000,
        });
        setUserStats({
          ...userStats,
          correct: correct + 1,
          guesses: guesses + 1,
        });
        let pokedata = { ...pokemon, answer: "correct" };
        setAllPokemon([pokedata, ...allPokemon]);
        fetchPokemon(
          pokemon,
          setPokemon,
          setPokemonStats,
          setAllPokemon,
          allPokemon,
          url,
          cycleAnimation
        );
        setUserGuess("");
      } else {
        enqueueSnackbar("Wrong", { variant: "error", autoHideDuration: 1000 });
        setCorrectGuess(false);
        setUserStats({ ...userStats, wrong: wrong + 1, guesses: guesses + 1 });
      }
    }
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Typography align="center" variant="h5">
          Step 2: Guess which pokemon
        </Typography>

        <Paper>
          <Grid
            className="container"
            style={{
              height: 210,
              paddingTop: 40,
              paddingBottom: 40,
              marginTop: 30,
              marginBottom: 30,
            }}
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <TextField
                label="Who's that pokemon?"
                variant="outlined"
                onChange={handleUserGuess}
                type="text"
                value={userGuess}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className="main_button"
                color="secondary"
                onClick={() => {
                  handleCheckAnswer();
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          {/* <div>
        <div>{correctGuess ? <div>Correct!</div> : <br />}</div>
      </div> */}
        </Paper>
      </Container>
    </div>
  );
}
