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
    default:
      return "gray";
  }
}
