import { useState } from "react";
import { TextField, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useFetchPokemons from "../hooks/useFetchPokemons";

export default function Search() {
  const [pokemonName, setPokemonName] = useState("");
  const { pokemons, findByName } = useFetchPokemons();

  const handleSearch = () => {
    if (pokemonName) findByName(pokemonName);
    console.log(pokemons);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "6px 14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 400,
        margin: "1rem auto",
        borderRadius: "10px",
      }}
    >
      <TextField
        onChange={(event) => setPokemonName(event.target.value)}
        label="Pesquisar"
        variant="filled"
        multiline
      />
      <IconButton type="button" sx={{ p: "10px" }} onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
