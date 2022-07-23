export default function getColor(type: string) {
  switch (type) {
    case "fire":
      return "#d90429";
    case "grass":
      return "#55a630";
    case "water":
      return "#00b4d8";
    case "poison":
      return "#3a0ca3";
    case "normal":
      return "#4a4e69";
    case "bug":
      return "#231942";
    case "electric":
      return "#fdc500";
    case "ground":
      return "#76520e";
    case "rock":
      return "#414833";
    case "psychic":
      return "#ff5d8f";
    case "ghost":
      return "#333";
    case "dark":
      return "#000";
    default:
      return "gray";
  }
}
