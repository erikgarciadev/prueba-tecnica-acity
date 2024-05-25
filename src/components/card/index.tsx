import React from "react";
import { Pokemon } from "../../types";
import { getPokemonId, getUrlImage } from "../../utils/utils";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/global";

interface Props {
  pokemon: Pokemon;
}

const Card: React.FC<Props> = ({ pokemon }) => {
  const { logged, isCapturedPokemon } = useGlobal();
  const id = getPokemonId(pokemon.url);

  const urlImage = getUrlImage(id);

  const capturedPokemon = isCapturedPokemon(id);

  return (
    <Link to={`/pokemons/${id}`}>
      <div className="shadow-lg flex flex-col items-center justify-between p-2 rounded-md">
        <img className="w-28 h-28" src={urlImage} alt="pokemon image" />
        <p className="text-black font-semibold text-center">{pokemon.name}</p>
        {logged ? (
          <p className="text-black bg-blue-400 text-xs p-2 mt-3 rounded-lg font-semibold text-center">
            {capturedPokemon ? "Capturado" : "No Capturado"}
          </p>
        ) : null}
      </div>
    </Link>
  );
};

export default Card;
