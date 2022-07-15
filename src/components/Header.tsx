import logo from "/pokemon-logo.svg";
import "../assets/Header.scss";

export default function Header() {
  return (
    <div id="header">
      <img className="logo" src={logo} alt="Pokemon logo" />
    </div>
  );
}
