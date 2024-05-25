import React from "react";
import { getPokemons } from "../services/pokemonService";
import { LIMIT } from "../utils/constants";
import { Pokemon } from "../types";

function usePokemons() {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [pages, setPages] = React.useState(0);

  React.useEffect(() => {
    setLoading(true);
    const offset = (page - 1) * LIMIT + 1;
    getPokemons(offset)
      .then((data) => {
        setPages(Math.floor(data.count / LIMIT));
        setPokemons(data.results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [page]);

  const handlePage = (_page: number) => {
    if (_page === page) return;
    setPage(_page);
  };

  return {
    pokemons,
    loading,
    handlePage,
    pages,
  };
}

export default usePokemons;
