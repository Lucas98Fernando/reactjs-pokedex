export default function getIcon(type: string) {
  return {
    [type]: "water",
    fire: "whatshot",
    grass: "eco",
    water: "water_drop",
    poison: "hub",
    normal: "width_normal",
    bug: "bug_report",
    electric: "electric_bolt",
    ground: "water",
    rock: "water",
    psychic: "psychology",
    flying: "air",
    steel: "workspaces",
    ice: "ac_unit",
    ghost: "mood_bad",
    fairy: "star",
    dark: "dark_mode",
  }[type];
}
