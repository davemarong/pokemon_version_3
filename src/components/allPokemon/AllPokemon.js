import React, { useContext } from "react";
import PokemonContext from "../context/pokemonContext";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Zoom from "@material-ui/core/Grow";
import Switch from "@material-ui/core/Switch";
import zIndex from "@material-ui/core/styles/zIndex";
import Paper from "@material-ui/core/Paper";

export default function AllPokemon() {
  const { allPokemonState } = useContext(PokemonContext);
  const [allPokemon, setAllPokemon] = allPokemonState;
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const correct = {
    background: "green",
  };
  const wrong = {
    background: "blue",
  };
  return (
    <div>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show previous pokemon"
      />
      <Grid container justify="center" component="div" spacing={3}>
        {allPokemon.map((pokemon, index) => (
          <Grid key={index} item>
            <Zoom in={checked}>
              <Paper className={pokemon.answer} elevation={3}>
                <Typography align="center">{pokemon.name}</Typography>
                <CardMedia
                  style={{ height: 100, width: 100, margin: "auto" }}
                  image={pokemon.sprites.front_default}
                />
              </Paper>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}