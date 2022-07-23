import { Icon } from "@mui/material";
import Chip from "@mui/material/Chip";
import setColor from "../utils/colors";
import setIcon from "../utils/icon";

export default function ChipType({ type }: { type: string }) {
  return (
    <Chip
      sx={{ backgroundColor: setColor(type), color: "#fff" }}
      label={type}
      icon={
        <Icon sx={{ color: "#fff !important", fontSize: "18px" }}>
          {setIcon(type)}
        </Icon>
      }
    />
  );
}
