import React, { useContext, useState } from "react";
import PokemonContext from "../context/pokemonContext";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  marginBottom: {
    marginBottom: 100,
  },
  start: {
    marginBottom: 50,
  },
}));
export default function SelectGeneration() {
  const { urlState } = useContext(PokemonContext);
  const [url, setUrl] = urlState;
  const [checked, setChecked] = useState();

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const handleWhichGeneration = (minNumber, maxNumber) => {
    setUrl({ firstNumber: minNumber, secondNumber: maxNumber });
  };

  const classes = useStyles();
  return (
    <div className={classes.start}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Switch generation"
      />
      <Collapse in={checked}>
        <Grid
          container
          justify="center"
          spacing={3}
          className={classes.marginBottom}
        >
          <Grid item>
            <Typography align="center" component="h1" variant="h4">
              Which generation is your favorite?
            </Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                handleWhichGeneration(1, 151);
              }}
              variant="contained"
              size="small"
              color="primary"
            >
              Gen 1
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                handleWhichGeneration(152, 251);
              }}
              variant="contained"
              size="small"
              color="primary"
            >
              Gen 2
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                handleWhichGeneration(252, 386);
              }}
              variant="contained"
              size="small"
              color="primary"
            >
              Gen 3
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                handleWhichGeneration(387, 493);
              }}
              variant="contained"
              size="small"
              color="primary"
            >
              Gen 4
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                handleWhichGeneration(494, 649);
              }}
              variant="contained"
              size="small"
              color="primary"
            >
              Gen 5
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                handleWhichGeneration(650, 721);
              }}
              variant="contained"
              size="small"
              color="primary"
            >
              Gen 6
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                handleWhichGeneration(722, 809);
              }}
              variant="contained"
              size="small"
              color="primary"
            >
              Gen 7
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                handleWhichGeneration(810, 898);
              }}
              variant="contained"
              size="small"
              color="primary"
            >
              Gen 8
            </Button>
          </Grid>
        </Grid>
      </Collapse>
    </div>
  );
}
