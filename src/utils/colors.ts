export default function getColor(type: string) {
  return {
    [type]: "gray",
    fire: "#d90429",
    grass: "#55a630",
    water: "#00b4d8",
    poison: "#3a0ca3",
    normal: "#4a4e69",
    bug: "#231942",
    electric: "#fdc500",
    ground: "#76520e",
    rock: "#414833",
    psychic: "#ff5d8f",
    ghost: "#333",
    dark: "#000",
  }[type];
}
