import React, { useContext } from "react";
import PokemonContext from "../context/pokemonContext";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Collapse from "@material-ui/core/Collapse";

import { Bar } from "react-chartjs-2";
export default function BarChart() {
  const { userStatsState, allPokemonState } = useContext(PokemonContext);
  const [userStats, setUserStats] = userStatsState;
  const [allPokemon, setAllPokemon] = allPokemonState;
  const { guesses, totalHints, imageHints, correct, wrong } = userStats;
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const data = {
    labels: [
      "Guesses",
      "Wrong guesses",
      "Correct guesses",
      "Total hints",
      "Image hints",
      "Total pokemon",
    ],
    datasets: [
      {
        axis: "y",
        label: "My statistics",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
        data: [
          guesses,
          wrong,
          correct,
          totalHints,
          imageHints,
          allPokemon.length,
        ],
      },
    ],
  };
  return (
    <div>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show statistics chart"
      />
      <Collapse in={checked}>
        <Bar data={data} />
      </Collapse>
    </div>
  );
}
