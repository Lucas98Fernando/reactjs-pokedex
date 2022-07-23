import { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import { PokemonResults } from "../types/Pokemons";
import capitalizeFirstLetter from "../utils/formatters";
import ChipType from "./ChipType";
import DialogDetails from "./DialogDetails";
import usePokemonImage from "../hooks/usePokemonImage";

export default function PokemonCard({ name, url }: PokemonResults) {
  const [open, setOpen] = useState(false);

  const { pokemonSprite, pokemonTypes, pokemonData } = usePokemonImage(url);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={4}>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.5rem",
          height: "100%",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={handleClickOpen}
      >
        <Box>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {capitalizeFirstLetter(name)}
            </Typography>
            <Stack sx={{ margin: "0.5rem 0 0" }} direction="row" spacing={1}>
              {pokemonTypes &&
                pokemonTypes.map((types) => (
                  <ChipType key={types.type.url} type={types.type.name} />
                ))}
            </Stack>
          </CardContent>
        </Box>
        <Box>
          <CardMedia
            component="img"
            sx={{ width: 120, padding: "0 1rem 0 0" }}
            image={pokemonSprite}
            alt="Pokémon"
          />
        </Box>
      </Card>
      <DialogDetails open={open} onClose={handleClose} data={pokemonData} />
    </Grid>
  );
}
