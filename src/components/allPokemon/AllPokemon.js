import React, { useContext } from "react";
import PokemonContext from "../context/pokemonContext";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Collapse from "@material-ui/core/Collapse";
import Switch from "@material-ui/core/Switch";
import zIndex from "@material-ui/core/styles/zIndex";
import Paper from "@material-ui/core/Paper";
import { motion } from "framer-motion";

export default function AllPokemon() {
  const { allPokemonState } = useContext(PokemonContext);
  const [allPokemon, setAllPokemon] = allPokemonState;
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Container maxWidth="sm">
      <Card>
        <div
          style={{ textAlign: "center" }}
          className="container scrollAllPokemon"
        >
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show previous pokemon"
          />
          <Grid container justify="center" component="div">
            {allPokemon.map((pokemon, index) => (
              <Grid key={index} item>
                <Collapse in={checked}>
                  <Paper
                    className={pokemon.answer}
                    elevation={3}
                    style={{ margin: 10 }}
                  >
                    <Typography align="center">
                      {capitalizeFirstLetter(pokemon.name)}
                    </Typography>
                    <CardMedia
                      style={{ height: 100, width: 100, margin: "auto" }}
                      image={pokemon.sprites.front_default}
                    />
                  </Paper>
                </Collapse>
              </Grid>
            ))}
          </Grid>
        </div>
      </Card>
    </Container>
  );
}
