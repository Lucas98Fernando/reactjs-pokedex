import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PokemonCard from "../components/Card";
import Header from "../components/Header";
import BaseButton from "../components/Button";
import useFetchPokemons from "../hooks/useFetchPokemons";

export default function Home() {
  const { pokemons, loadMore } = useFetchPokemons();

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={2} rowGap={2} alignItems="stretch">
          {pokemons &&
            pokemons.map((data, index) => (
              <PokemonCard key={index} name={data.name} url={data.url} />
            ))}
        </Grid>
        <Container sx={{ textAlign: "center", margin: "2rem 0 1rem" }}>
          <BaseButton onClick={loadMore} label="Carregar mais" />
        </Container>
      </Container>
    </>
  );
}
