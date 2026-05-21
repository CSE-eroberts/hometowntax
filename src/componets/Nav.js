import "./css/Nav.css"
import  {Link} from "react-router-dom";
import Login from "./Login";
import { SignedIn, useAuth } from "@clerk/clerk-react";

function Nav() {
    const { isLoaded, isSignedIn, orgId, has } = useAuth();
    const isOrgAdmin = isLoaded && isSignedIn && orgId && has({ role: "org:admin" });
     
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
        <li className="nav-auth">
          <Login />
        </li>
        <li className="nav-org">
          <SignedIn>
            {isOrgAdmin && <Link to="/organization">Invites</Link>}
          </SignedIn>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
