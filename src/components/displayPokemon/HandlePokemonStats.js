import { useContext } from "react";
import PokemonContext from "../context/pokemonContext";

export default function HandlePokemonStats() {
  const { pokemonState, pokemonStatsState } = useContext(PokemonContext);
  const [pokemonStats, setPokemonStats] = pokemonStatsState;
  //PS = PokemonStats
  const { namePS, idPS, heightPS, imgPS, type1PS, type2PS } = pokemonStats;

  const handlePokemonStatsName = () => {
    setPokemonStats({ ...pokemonStats, namePS: true });
  };
  const handlePokemonStatsId = () => {
    setPokemonStats({ ...pokemonStats, idPS: true });
  };
  const handlePokemonStatsHeight = () => {
    setPokemonStats({ ...pokemonStats, heightPS: true });
  };
  const handlePokemonStatsImg = () => {
    setPokemonStats({ ...pokemonStats, imgPS: true });
  };
  const handlePokemonStatsTypes1 = () => {
    setPokemonStats({ ...pokemonStats, type1PS: true });
  };
  const handlePokemonStatsTypes2 = () => {
    setPokemonStats({ ...pokemonStats, type2PS: true });
  };

  return {
    handlePokemonStatsName,
    handlePokemonStatsId,
    handlePokemonStatsHeight,
    handlePokemonStatsImg,
    handlePokemonStatsTypes1,
    handlePokemonStatsTypes2,
  };
}
