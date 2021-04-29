import React, { useState, useContext } from "react";
import PokemonContext from "../context/pokemonContext";
import fetchPokemon from "../fetchPokemon/FetchPokemonData";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function UserGuess() {
  const {
    pokemonState,
    pokemonStatsState,
    allPokemonState,
    userGuessState,
    userStatsState,
    urlState,
  } = useContext(PokemonContext);
  const [pokemon, setPokemon] = pokemonState;
  const [pokemonStats, setPokemonStats] = pokemonStatsState;
  const [allPokemon, setAllPokemon] = allPokemonState;
  const [userGuess, setUserGuess] = userGuessState;
  const [userStats, setUserStats] = userStatsState;
  const [url, setUrl] = urlState;
  const { guesses, wrong, correct } = userStats;
  const [correctGuess, setCorrectGuess] = useState(false);
  const handleUserGuess = (event) => {
    setUserGuess(event.target.value);
  };
  const handleCheckAnswer = () => {
    if (userGuess === pokemon.name) {
      setCorrectGuess(true);
      setUserStats({
        ...userStats,
        correct: correct + 1,
        guesses: guesses + 1,
      });
      let pokedata = { ...pokemon, answer: "correct" };
      console.log(pokemon);
      setAllPokemon([pokedata, ...allPokemon]);
      fetchPokemon(
        pokemon,
        setPokemon,
        setPokemonStats,
        setAllPokemon,
        allPokemon,
        url
      );
    } else {
      setCorrectGuess(false);
      setUserStats({ ...userStats, wrong: wrong + 1, guesses: guesses + 1 });
    }
  };
  return (
    <div>
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item>
          <TextField
            label="Who's that pokemon?"
            variant="outlined"
            onChange={handleUserGuess}
            type="text"
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              handleCheckAnswer();
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      <div>
        <div>{correctGuess ? <div>Correct!</div> : ""}</div>
      </div>
    </div>
  );
}
