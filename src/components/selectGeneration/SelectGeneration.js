import React, { useContext, useState, useRef } from "react";
import PokemonContext from "../context/pokemonContext";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
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
    marginBottom: 10,
  },
  start: {
    textAlign: "center",
  },
}));
export default function SelectGeneration() {
  const { urlState } = useContext(PokemonContext);
  const [url, setUrl] = urlState;
  const [checked, setChecked] = useState(true);
  const [currentGen, setCurrentGen] = useState(2);
  const resetGen = [false, false, false, false, false, false, false, false];
  const [gen, setGen] = useState(resetGen);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const handleWhichGeneration = (minNumber, maxNumber) => {
    setUrl({ firstNumber: minNumber, secondNumber: maxNumber });
  };
  const handleSwitchGen = (generation) => {
    setCurrentGen(`Generation ${generation} is active`);
  };
  const handleChangeGen = (x) => {
    let newGen = resetGen;
    newGen.splice(x, 1, true);
    setGen(newGen);
  };
  console.log(gen, "Gen");
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Card>
        <div className="container">
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
                <Button
                  style={gen[0] ? { background: "green" } : { outline: "none" }}
                  onClick={() => {
                    handleWhichGeneration(1, 151);
                    handleSwitchGen(1);
                    handleChangeGen(0);
                  }}
                  className="hint_button"
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Gen 1
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={gen[1] ? { background: "green" } : { outline: "none" }}
                  onClick={() => {
                    handleWhichGeneration(152, 251);
                    handleSwitchGen(2);
                    handleChangeGen(1);
                  }}
                  className="hint_button"
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Gen 2
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={gen[2] ? { background: "green" } : { outline: "none" }}
                  onClick={() => {
                    handleWhichGeneration(252, 386);
                    handleSwitchGen(3);
                    handleChangeGen(2);
                  }}
                  className="hint_button"
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Gen 3
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={gen[3] ? { background: "green" } : { outline: "none" }}
                  onClick={() => {
                    handleWhichGeneration(387, 493);
                    handleSwitchGen(4);
                    handleChangeGen(3);
                  }}
                  className="hint_button"
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Gen 4
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={gen[4] ? { background: "green" } : { outline: "none" }}
                  onClick={() => {
                    handleWhichGeneration(494, 649);
                    handleSwitchGen(5);
                    handleChangeGen(4);
                  }}
                  className="hint_button"
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Gen 5
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={gen[5] ? { background: "green" } : { outline: "none" }}
                  onClick={() => {
                    handleWhichGeneration(650, 721);
                    handleSwitchGen(6);
                    handleChangeGen(5);
                  }}
                  className="hint_button"
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Gen 6
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={gen[6] ? { background: "green" } : { outline: "none" }}
                  onClick={() => {
                    handleWhichGeneration(722, 809);
                    handleSwitchGen(7);
                    handleChangeGen(6);
                  }}
                  className="hint_button"
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Gen 7
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={gen[7] ? { background: "green" } : { outline: "none" }}
                  onClick={() => {
                    handleWhichGeneration(810, 898);
                    handleSwitchGen(8);
                    handleChangeGen(7);
                  }}
                  className="hint_button"
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Gen 8
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography align="center">{currentGen}</Typography>
              </Grid>
            </Grid>
          </Collapse>
        </div>
      </Card>
    </Container>
  );
}
