import Chip from "@mui/material/Chip";
import setColor from "../utils/colors";

export default function ChipType({ type }: { type: string }) {
  return (
    <Chip
      label={type}
      sx={{ backgroundColor: setColor(type), color: "#fff" }}
    />
  );
}
