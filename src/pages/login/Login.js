import Button from "@mui/material/Button";
import "./login.css";
import { Link as RouterLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">Welcome to Social Media.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Mobile" className="loginInput" />
            <input placeholder="Password" className="loginInput" />

            <Button
              component={RouterLink}
              to="/home"
              variant="contained"
              className="loginButton"
            >
              Log In
            </Button>

            <span className="loginForgot">Forgot Password?</span>

            <Button
              component={RouterLink}
              to="/register"
              variant="contained"
              color="success"
              className="loginRegisterButton"
            >
              Create a New Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
