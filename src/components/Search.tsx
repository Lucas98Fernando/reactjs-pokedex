import { MouseEventHandler, useState } from "react";
import { TextField, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  handleSearch: MouseEventHandler<HTMLElement>;
  onPokemonName(value: string): void;
}

export default function Search({ handleSearch, onPokemonName }: Props) {
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
        onChange={(event) => onPokemonName(event.target.value)}
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
