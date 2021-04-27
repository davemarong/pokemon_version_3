import React, { useContext } from "react";
import PokemonContext from "../context/pokemonContext";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
export default function AllPokemon() {
  const { allPokemonState } = useContext(PokemonContext);
  const [allPokemon, setAllPokemon] = allPokemonState;
  return (
    <div>
      <Grid container>
        {allPokemon.map((pokemon) => (
          <Grid item>
            <Card key={pokemon.id}>
              <CardContent>
                <Typography>{pokemon.name}</Typography>
              </CardContent>
              <CardMedia
                style={{ height: 100, width: 100 }}
                image={pokemon.sprites.front_default}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
