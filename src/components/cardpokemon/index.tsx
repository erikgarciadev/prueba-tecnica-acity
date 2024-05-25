import React from "react";
import { PokemonDetail } from "../../types";
import { useGlobal } from "../../context/global";
import { getUrlImage } from "../../utils/utils";

interface Props {
  pokemon: PokemonDetail;
}

const CardPokemon: React.FC<Props> = ({ pokemon }) => {
  const { logged, handleCapturePokemon, isCapturedPokemon } = useGlobal();

  const urlImage = getUrlImage(pokemon?.id);
  const isCaptured = isCapturedPokemon(pokemon?.id);
  return (
    <div className="shadow-lg flex flex-col items-center justify-between p-2 rounded-md">
      <img className="w-28 h-28" src={urlImage} alt="pokemon image" />
      <p className="text-black font-semibold text-center">{pokemon?.name}</p>

      <p className="text-black">Tipos</p>
      <div>
        {pokemon?.types.map((type,i) => (
          <p key={i} className="text-gray-500">{type.type.name}</p>
        ))}
      </div>
      <p>Experiemcia : {pokemon?.base_experience}</p>

      <p className="text-black">Habilidades</p>
      <div>
        {pokemon?.abilities.map((ability,i) => (
          <p  key={i} className="text-gray-500">{ability.ability.name}</p>
        ))}
      </div>

      {logged ? (
        <>
          {isCaptured ? (
            <p className="text-black font-bold mt-2">Capturado</p>
          ) : (
            <button
              onClick={() =>
                handleCapturePokemon({
                  name: pokemon?.name,
                  id: pokemon.id,
                })
              }
              className="text-white mt-2 bg-blue-500 rounded-md p-3"
            >
              Capturar
            </button>
          )}
        </>
      ) : null}
    </div>
  );
};

export default CardPokemon;
