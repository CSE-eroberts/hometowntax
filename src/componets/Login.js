import SetOrg from "./SetOrg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/clerk-react";
import "./css/Login.css";


const Login = () => {
  return (
    <div className="login-control">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="login-button" type="button">
            Login
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SetOrg />
        <div className="user-button">
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
};

export default Login;
