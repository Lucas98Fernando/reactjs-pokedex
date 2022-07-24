import { Container, Grid } from "@mui/material";
import PokemonCard from "../components/Card";
import Header from "../components/Header";
import BaseButton from "../components/Button";
import useFetchPokemons from "../hooks/useFetchPokemons";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { PokemonResults } from "../types/Pokemons";

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonResults[]>();
  const [pokemonName, setPokemonName] = useState("");
  const [showLoadMore, setShowLoadMore] = useState(true);
  const { getPokemons, loadMore, findByName } = useFetchPokemons();

  useEffect(() => {
    handleGetPokemons();
  }, []);

  const handleGetPokemons = () => {
    setPokemons([]);
    setPokemonName("");
    getPokemons().then((data) => setPokemons(data?.results));
  };

  const handleLoadMore = () =>
    loadMore().then((data) =>
      setPokemons((poke) => [...poke!, ...data?.results!])
    );

  const handlePokemonName = (name: string) => setPokemonName(name);

  const handleSearch = () => {
    setPokemons([]);
    if (pokemonName.length > 0) {
      setShowLoadMore(false);
      findByName(pokemonName).then((response) =>
        setPokemons([
          { name: response?.data.name, url: response?.request.responseURL },
        ])
      );
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Search handleSearch={handleSearch} onPokemonName={handlePokemonName} />
        <Grid container spacing={2} rowGap={2} alignItems="stretch">
          {pokemons &&
            pokemons.length > 0 &&
            pokemons.map((data, index) => (
              <PokemonCard key={index} {...data} />
            ))}
        </Grid>
        <Container sx={{ textAlign: "center", margin: "2rem 0 1rem" }}>
          {showLoadMore ? (
            <BaseButton onClick={handleLoadMore} label="Carregar mais" />
          ) : (
            <BaseButton onClick={handleGetPokemons} label="Carregar todos" />
          )}
        </Container>
      </Container>
    </>
  );
}
