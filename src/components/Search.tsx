import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const BaseInput = styled(TextField)(() => ({
  margin: "1rem 0",
  background: "#fff",
}));

export default function Search() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <BaseInput label="Pesquisar" variant="filled" />
    </Box>
  );
}
