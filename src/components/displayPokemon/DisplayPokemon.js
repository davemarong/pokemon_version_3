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
import { Card, Container } from "@material-ui/core";

export default function DisplayPokemon() {
  const { pokemonState, pokemonStatsState, userStatsState, animationState } =
    useContext(PokemonContext);
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
        <Typography align="center" variant="h5">
          Step 1: Choose your hints
        </Typography>
        <motion.div variants={displayContainerVariants} animate={animation}>
          <Paper>
            <Grid
              className="container"
              container
              direction="row"
              style={{
                paddingTop: 40,
                paddingBottom: 40,
                marginTop: 30,
                marginBottom: 30,
              }}
            >
              <Grid item xs={9} container direction="row" spacing={6}>
                <Grid container>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={4}>
                    <Button
                      style={
                        idPS
                          ? {
                              background:
                                "linear-gradient(to right, #22838a, #36518c)",
                            }
                          : null
                      }
                      size="small"
                      variant="contained"
                      color="primary"
                      className="hint_button"
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
                      style={
                        heightPS
                          ? {
                              background:
                                "linear-gradient(to right, #22838a, #36518c)",
                            }
                          : null
                      }
                      className="hint_button"
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
                        <Typography align="center">{height / 10} m</Typography>
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
                      style={
                        type1PS
                          ? {
                              background:
                                "linear-gradient(to right, #22838a, #36518c)",
                            }
                          : null
                      }
                      className="hint_button"
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
                      style={
                        type2PS
                          ? {
                              background:
                                "linear-gradient(to right, #22838a, #36518c)",
                            }
                          : null
                      }
                      className="hint_button"
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
                    style={
                      imgPS
                        ? {
                            background:
                              "linear-gradient(to right, #22838a, #36518c)",
                          }
                        : null
                    }
                    className="hint_button imgHint"
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
                    Image
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
