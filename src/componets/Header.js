import {Link} from "react-router-dom";
import "./css/Header.css";
import Nav from "./Nav";
import Logo from "../images/logo.png";

function Header() {
  return (
    <header id="main-header">
      <div id="header-logo">
        <Link to="/"><img id="logo" src={Logo} alt="Hometown Tax Logo" /></Link>
        <h1>Hometown Tax</h1>
      </div>
      <Nav /> 
    </header>
  );
}

export default Header;
