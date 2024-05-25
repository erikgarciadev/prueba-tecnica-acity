import React from "react";
import Layout from "../../layouts";
import usePokemon from "../../hooks/usePokemon";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading";
import CardPokemon from "../../components/cardpokemon";
import { PokemonDetail } from "../../types";

const Pokemon = () => {
  const params = useParams();
  const id = Number(params.id);

  const { pokemon, loading } = usePokemon(id);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <CardPokemon pokemon={pokemon as PokemonDetail} />
      )}
    </Layout>
  );
};

export default Pokemon;
