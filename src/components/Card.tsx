import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { PokemonResults, PokemonTypes } from "../types/Pokemons";
import usePokemons from "../hooks/usePokemons";
import capitalizeFirstLetter from "../utils/formatters";
import ChipType from "./ChipType";
import DialogDetails from "./DialogDetails";

export default function PokemonCard({ name, url }: PokemonResults) {
  const [pokemonSprite, setPokemonSprite] = useState();
  const [pokemonTypes, setPokemonTypes] = useState<PokemonTypes[]>([]);
  const [pokemonData, setPokemonData] = useState();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    usePokemons.getPokemonImage(url).then((data) => {
      setPokemonData(data);
      setPokemonSprite(data.sprites.other.dream_world.front_default);
      setPokemonTypes(data.types);
    });
  }, []);

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
      <DialogDetails open={open} onClose={handleClose} data={name} />
    </Grid>
  );
}
