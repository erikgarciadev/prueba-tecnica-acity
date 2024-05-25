import axios from "axios";
import { BASE_URL_API, LIMIT } from "../utils/constants";
import { PokemonDetail, ResultPokemons } from "../types";

export const getPokemons = async (offset: number) => {
  const data = await axios.get<ResultPokemons>(
    `${BASE_URL_API}?offset=${offset}&limit=${LIMIT}`
  );
  return data.data;
};

export const getPokemon = async (id: number) => {
  const data = await axios.get<PokemonDetail>(`${BASE_URL_API}/${id}`);
  return data.data;
};
