import React from "react";
import { getPokemon } from "../services/pokemonService";
import { PokemonDetail } from "../types";

function usePokemon(id: number) {
  const [pokemon, setPokemon] = React.useState<PokemonDetail | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getPokemon(id)
      .then((data) => {
        setPokemon(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return {
    pokemon,
    loading,
  };
}

export default usePokemon;
