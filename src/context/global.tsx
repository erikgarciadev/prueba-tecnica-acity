import * as React from "react";
import { DEFAULT_USER } from "../utils/constants";
import { useNavigate } from "react-router-dom";

interface Login {
  username: string;
  password: string;
}

interface CapturedPokemon {
  id: number;
  name: string;
}

interface GlobalContextProps {
  logged: boolean;
  selectPokemons: CapturedPokemon[];
  singInUser: (values: Login) => void;
  handleCapturePokemon: (values: CapturedPokemon) => void;
  isCapturedPokemon: (id: number) => boolean;
}

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line
const GlobalContext = React.createContext({} as GlobalContextProps);

export const useGlobal = (): Readonly<GlobalContextProps> => {
  const context = React.useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobal must be used within an AuthContextProvider");
  }

  return context;
};

const GlobalProvider = (props: Props) => {
  const [logged, setLogged] = React.useState<boolean>(false);
  const [selectPokemons, setSelectedPokemons] = React.useState<
    CapturedPokemon[]
  >([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (window.localStorage.getItem("logged")) {
      setLogged(true);
    }
    if (window.localStorage.getItem("pokemons")) {
      const pokemons = JSON.parse(
        window.localStorage.getItem("pokemons") ?? "[]"
      );
      setSelectedPokemons(pokemons);
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const singInUser = async (values: Login) => {
    if (
      values.password === DEFAULT_USER.password &&
      values.username === DEFAULT_USER.username
    ) {
      setLogged(true);
      window.localStorage.setItem("logged", "true");
      navigate("/");
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCapturePokemon = (values: { id: number; name: string }) => {
    const newPokemons = [...selectPokemons, values];
    setSelectedPokemons(newPokemons);
    window.localStorage.setItem("pokemons", JSON.stringify(newPokemons));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isCapturedPokemon = (id: number) => {
    const findPokemon = selectPokemons.find((pokemon) => pokemon.id === id);

    if (findPokemon) return true;

    return false;
  };

  const globalProviderValue = React.useMemo(
    () => ({
      logged,
      selectPokemons,
      singInUser,
      handleCapturePokemon,
      isCapturedPokemon,
    }),
    [
      logged,
      selectPokemons,
      singInUser,
      handleCapturePokemon,
      isCapturedPokemon,
    ]
  );

  return (
    <GlobalContext.Provider value={globalProviderValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
