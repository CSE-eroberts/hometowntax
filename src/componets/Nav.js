import "./css/Nav.css"
import  {Link} from "react-router-dom";

function Nav() {
  return (
    <nav id="main-nav">
      <ul>
        <li>
          <Link to="/#ourteam">Our Team</Link>
        </li>
        <li>
          <Link to="/#contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/FAQ">FAQ's</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
