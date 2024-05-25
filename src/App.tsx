import Card from "./components/card";
import Loading from "./components/loading";
import Pagination from "./components/pagination";
import usePokemons from "./hooks/usePokemons";
import Layout from "./layouts";

function App() {
  const { pokemons, loading, pages, handlePage } = usePokemons();

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <>
          {pokemons.length === 0 ? (
            <p>No se encontraron pokemons</p>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                {pokemons.map((pokemon) => (
                  <Card key={pokemon.name} pokemon={pokemon} />
                ))}
              </div>
              <div>
                <Pagination pages={pages} handlePage={handlePage} />
              </div>
            </>
          )}
        </>
      )}
    </Layout>
  );
}

export default App;
