import { Container, Grid } from "@mui/material";
import PokemonCard from "../components/Card";
import Header from "../components/Header";
import BaseButton from "../components/Button";
import useFetchPokemons from "../hooks/useFetchPokemons";
import Search from "../components/Search";

export default function Home() {
  const { pokemons, loadMore } = useFetchPokemons();

  return (
    <>
      <Header />
      <Container>
        <Search />
        <Grid container spacing={2} rowGap={2} alignItems="stretch">
          {pokemons &&
            pokemons.length > 0 &&
            pokemons.map((data, index) => (
              <PokemonCard key={index} {...data} />
            ))}
        </Grid>
        <Container sx={{ textAlign: "center", margin: "2rem 0 1rem" }}>
          <BaseButton onClick={loadMore} label="Carregar mais" />
        </Container>
      </Container>
    </>
  );
}
