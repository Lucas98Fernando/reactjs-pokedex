import { Box, Container, Grid, Typography } from "@mui/material";
import PokemonCard from "@components/Card";
import Header from "@components/Header";
import BaseButton from "@components/Button";
import Search from "@components/Search";
import { useEffect } from "react";
import { usePokemons } from "@hooks/usePokemons";

export default function Home() {
  const { pokemons, showLoadMore, getPokemons, loadMore } = usePokemons();

  useEffect(() => {
    getPokemons();
  }, []);

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
          {pokemons.length === 0 && (
            <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
              <Typography sx={{ color: "#fff" }}>
                Não foi possível encontrar nenhum pokémon com o nome infomado.
              </Typography>
            </Box>
          )}
        </Grid>
        <Container sx={{ textAlign: "center", margin: "2rem 0 1rem" }}>
          {showLoadMore ? (
            <BaseButton onClick={loadMore} label="Carregar mais" />
          ) : (
            <BaseButton onClick={() => getPokemons()} label="Carregar todos" />
          )}
        </Container>
      </Container>
    </>
  );
}
