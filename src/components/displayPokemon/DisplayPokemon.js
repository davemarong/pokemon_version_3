import React, { useState, useContext } from "react";
import PokemonContext from "../context/pokemonContext";
import HandlePokemonStats from "./HandlePokemonStats";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Fade from "@material-ui/core/Fade";

export default function DisplayPokemon() {
  const { pokemonState, pokemonStatsState, userStatsState } = useContext(
    PokemonContext
  );
  const [pokemon, setPokemon] = pokemonState;
  const [pokemonStats, setPokemonStats] = pokemonStatsState;
  const [userStats, setUserStats] = userStatsState;
  const {
    name,
    id,
    height,
    sprites: { front_default: img },
    types: [
      {
        type: { name: type1 },
      },
    ],
    type2,
  } = pokemon;
  //PS = PokemonStats
  const { namePS, idPS, heightPS, imgPS, type1PS, type2PS } = pokemonStats;
  const { guesses, totalHints, imageHints, correct, wrong } = userStats;
  const {
    handlePokemonStatsName,
    handlePokemonStatsImg,
    handlePokemonStatsId,
    handlePokemonStatsHeight,
    handlePokemonStatsTypes1,
    handlePokemonStatsTypes2,
  } = HandlePokemonStats();
  return (
    <Grid container justify="center" spacing={4} direction="row">
      {/* <Grid item xs={}>
        <Button onClick={handlePokemonStatsName}>Name</Button>
        <div>{namePS ? <div>{name}</div> : <div>...</div>}</div>
      </Grid> */}
      <Grid item>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            handlePokemonStatsId();
            setUserStats({ ...userStats, totalHints: totalHints + 1 });
          }}
        >
          Id
        </Button>
        <div>
          {idPS ? (
            <Typography align="center">{id}</Typography>
          ) : (
            <Typography align="center">...</Typography>
          )}
        </div>
      </Grid>
      <Grid item>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            setUserStats({ ...userStats, totalHints: totalHints + 1 });
            handlePokemonStatsHeight();
          }}
        >
          Height
        </Button>
        <div>
          {heightPS ? (
            <Typography align="center">{height}</Typography>
          ) : (
            <Typography align="center">...</Typography>
          )}
        </div>
      </Grid>

      <Grid item>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            setUserStats({ ...userStats, totalHints: totalHints + 1 });
            handlePokemonStatsTypes1();
          }}
        >
          Type 1
        </Button>
        <div>
          {type1PS ? (
            <Typography align="center">{type1}</Typography>
          ) : (
            <Typography align="center">...</Typography>
          )}
        </div>
      </Grid>
      <Grid item>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            setUserStats({ ...userStats, totalHints: totalHints + 1 });
            handlePokemonStatsTypes2();
          }}
        >
          Type 2
        </Button>
        <div>
          {type2PS ? (
            <Typography align="center">{type2}</Typography>
          ) : (
            <Typography align="center">...</Typography>
          )}
        </div>
      </Grid>
      <Grid container direction="column" item xs={12}>
        <Grid container justify="center" item>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => {
              setUserStats({
                ...userStats,
                imageHints: imageHints + 1,
                totalHints: totalHints + 1,
              });
              handlePokemonStatsImg();
            }}
          >
            Img
          </Button>
        </Grid>
        <Grid item>
          {imgPS ? (
            <CardMedia
              style={{ height: 100, width: 100, margin: "auto" }}
              image={img}
            />
          ) : (
            <Typography align="center">...</Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
