import React from "react";
import { getUrlImage } from "../../utils/utils";
import { Link } from "react-router-dom";

interface Props {
  pokemon: {
    name: string;
    id: number;
  };
}

const CardCaptured: React.FC<Props> = ({ pokemon }) => {
  const urlImage = getUrlImage(pokemon.id);

  return (
    <>
      <Link to={`/pokemons/${pokemon.id}`}>
        <div className="shadow-lg flex flex-col items-center justify-between p-2 rounded-md">
          <img className="w-28 h-28" src={urlImage} alt="pokemon image" />
          <p className="text-black font-semibold text-center">{pokemon.name}</p>
        </div>
      </Link>
    </>
  );
};

export default CardCaptured;
