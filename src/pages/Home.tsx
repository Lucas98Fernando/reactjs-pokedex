import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PokemonCard from "../components/Card";
import Header from "../components/Header";
import usePokemons from "../hooks/usePokemons";
import { PokemonResults } from "../types/Pokemons";
import BaseButton from "../components/Button";

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonResults[]>();
  const [offset, setOffset] = useState(20);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    usePokemons.getAllPokemons().then((data) => setPokemons(data?.results));
  }, []);

  const loadMore = () => {
    setOffset((offset) => offset + 20);

    usePokemons
      .getAllPokemons(offset, limit)
      .then((data) => setPokemons((poke) => [...poke, ...data?.results]));
  };

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={2} rowGap={2} alignItems="stretch">
          {pokemons &&
            pokemons.map((data) => (
              <PokemonCard key={data.url} name={data.name} url={data.url} />
            ))}
        </Grid>
        <Container sx={{ textAlign: "center", margin: "2rem 0 1rem" }}>
          <BaseButton onClick={loadMore} label="Carregar mais" />
        </Container>
      </Container>
    </>
  );
}
