import React, { useContext } from "react";
import PokemonContext from "../context/pokemonContext";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export default function Url() {
  const { urlState } = useContext(PokemonContext);
  const [url, setUrl] = urlState;

  return (
    <div>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={}
        onChange={handleChange}
      >
        <MenuItem>Generation 1</MenuItem>
        <MenuItem>Generation 2</MenuItem>
        <MenuItem>Generation 3</MenuItem>
        <MenuItem>Generation 4</MenuItem>
        <MenuItem>Generation 5</MenuItem>
        <MenuItem>Generation 6</MenuItem>
      </Select>
    </div>
  );
}
