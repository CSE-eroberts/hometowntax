import "./css/Nav.css"
import  {Link} from "react-router-dom";

function Nav() {
  return (
    <nav id="main-nav">
      <ul>
        <li>
          <a href="#ourteam">Our Team</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
