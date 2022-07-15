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
    default:
      return "gray";
  }
}
