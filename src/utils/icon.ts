export default function getIcon(type: string) {
  switch (type) {
    case "fire":
      return "whatshot";
    case "grass":
      return "eco";
    case "water":
      return "water_drop";
    case "poison":
      return "hub";
    case "normal":
      return "width_normal";
    case "bug":
      return "bug_report";
    case "electric":
      return "electric_bolt";
    case "ground":
      return "water";
    case "rock":
      return "water";
    case "psychic":
      return "psychology";
    case "flying":
      return "air";
    case "steel":
      return "workspaces";
    case "ice":
      return "ac_unit";
    case "ghost":
      return "mood_bad";
    case "fairy":
      return "star";
    case "dark":
      return "dark_mode";
    default:
      return "water";
  }
}
