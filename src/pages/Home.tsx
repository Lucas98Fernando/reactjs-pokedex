import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PokemonCard from "../components/Card";
import Header from "../components/Header";
import usePokemons from "../hooks/usePokemons";
import { AllPokemons } from "../types/Pokemons";

export default function Home() {
  const [pokemons, setPokemons] = useState<AllPokemons>();

  useEffect(() => {
    usePokemons.getAllPokemons().then((data) => setPokemons(data));
  }, []);

  return (
    <>
      <Header />
      <Container fixed>
        <Grid container spacing={2} rowGap={2} alignItems="stretch">
          {pokemons &&
            pokemons.results.map((data) => (
              <PokemonCard key={data.url} name={data.name} url={data.url} />
            ))}
        </Grid>
      </Container>
    </>
  );
}
