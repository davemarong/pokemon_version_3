import React from "react";
import PokemonContext from "../context/pokemonContext";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "Guesses",
    "Wrong guesses",
    "Correct guesses",
    "Total hints",
    "Image hints",
  ],
  datasets: [
    {
      label: "My statistics",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
      ],
      borderWidth: 1,
      data: [65, 59, 80, 81, 56],
    },
  ],
};
function App() {
  return (
    <div>
      <h2>Bar Example (custom size)</h2>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
}
export default App;
