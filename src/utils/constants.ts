export const ROUTES = Object.freeze({
  LOGIN: "/login",
  BASE: "/",
  POKEMON: "/pokemons/:id",
  CAPTURED: "/captured",
});

export const BASE_URL_API = "https://pokeapi.co/api/v2/pokemon";

export const LIMIT = 20;

export const DEFAULT_USER = Object.freeze({
  username: "test",
  password: "123456",
});
