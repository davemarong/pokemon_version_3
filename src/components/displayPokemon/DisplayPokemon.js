import React, { useState, useContext } from "react";
import PokemonContext from "../context/pokemonContext";
import HandlePokemonStats from "./HandlePokemonStats";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { motion, useCycle } from "framer-motion";
import { Container } from "@material-ui/core";

export default function DisplayPokemon() {
  const {
    pokemonState,
    pokemonStatsState,
    userStatsState,
    animationState,
  } = useContext(PokemonContext);
  const [pokemon, setPokemon] = pokemonState;
  const [pokemonStats, setPokemonStats] = pokemonStatsState;
  const [userStats, setUserStats] = userStatsState;
  const [animation, cycleAnimation] = animationState;
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
  const [idAnimation, cycleIdAnimation] = useCycle(
    "hintAnimation1",
    "hintAnimation2"
  );
  const displayContainerVariants = {
    animationOne: {
      rotate: 360,
      transition: {
        duration: 0.3,
      },
    },
    animationTwo: {
      rotate: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <>
      <Container maxWidth="sm">
        <motion.div variants={displayContainerVariants} animate={animation}>
          <Paper style={{ height: 230, marginBottom: 50 }}>
            <Grid
              container
              direction="row"
              style={{ paddingTop: 55, marginTop: 70, marginBottom: 70 }}
            >
              <Grid item xs={9} container direction="row" spacing={6}>
                <Grid container>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={4}>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        handlePokemonStatsId();
                        setUserStats({
                          ...userStats,
                          totalHints: totalHints + 1,
                        });
                      }}
                    >
                      Id
                    </Button>
                  </Grid>
                  <Grid container justify="flex-start" item xs>
                    <div>
                      {idPS ? (
                        <Typography align="center">{id}</Typography>
                      ) : (
                        <Typography align="center">...</Typography>
                      )}
                    </div>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={4}>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setUserStats({
                          ...userStats,
                          totalHints: totalHints + 1,
                        });
                        handlePokemonStatsHeight();
                      }}
                    >
                      Height
                    </Button>
                  </Grid>
                  <Grid container justify="flex-start" item xs>
                    <div>
                      {heightPS ? (
                        <Typography align="center">{height}</Typography>
                      ) : (
                        <Typography align="center">...</Typography>
                      )}
                    </div>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={4}>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setUserStats({
                          ...userStats,
                          totalHints: totalHints + 1,
                        });
                        handlePokemonStatsTypes1();
                      }}
                    >
                      Type 1
                    </Button>
                  </Grid>
                  <Grid container justify="flex-start" item xs>
                    <div>
                      {type1PS ? (
                        <Typography align="center">
                          {capitalizeFirstLetter(type1)}
                        </Typography>
                      ) : (
                        <Typography align="center">...</Typography>
                      )}
                    </div>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={4}>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setUserStats({
                          ...userStats,
                          totalHints: totalHints + 1,
                        });
                        handlePokemonStatsTypes2();
                      }}
                    >
                      Type 2
                    </Button>
                  </Grid>
                  <Grid container justify="flex-start" item xs>
                    <div>
                      {type2PS ? (
                        <Typography align="center">
                          {capitalizeFirstLetter(type2)}
                        </Typography>
                      ) : (
                        <Typography align="center">...</Typography>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} container direction="row">
                <Grid
                  container
                  justify="flex-start"
                  item
                  xs={12}
                  direction="column"
                >
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
                <Grid container justify="center" item xs={12}>
                  {imgPS ? (
                    <CardMedia
                      style={{ height: 100, width: 100, margin: "auto" }}
                      image={img}
                    />
                  ) : (
                    <Typography
                      align="center"
                      style={{ height: 100, width: 100, margin: "auto" }}
                    >
                      ...
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </>
  );
}
