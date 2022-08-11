import logo from "/pokemon-logo.svg";
import { BaseHeader, Logo } from "@styles/Header";

export default function Header() {
  return (
    <BaseHeader>
      <Logo className="logo" src={logo} alt="Pokemon logo" />
    </BaseHeader>
  );
}
