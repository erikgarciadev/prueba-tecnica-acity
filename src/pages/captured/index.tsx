import React from "react";
import { useGlobal } from "../../context/global";
import Layout from "../../layouts";
import CardCaptured from "../../components/card-captured";

const Captured = () => {
  const { selectPokemons } = useGlobal();
  return (
    <Layout>
      <>
        {selectPokemons.length === 0 ? (
          <p>No se tiene pokemons capturados por el momento</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
            {selectPokemons.map((pokemon) => (
              <CardCaptured key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </>
    </Layout>
  );
};

export default Captured;
