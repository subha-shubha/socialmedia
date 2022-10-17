import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">Welcome to Social Media</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Name" className="loginInput" />
            <input placeholder="Mobile" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />

            <Button
              component={RouterLink}
              to="/login"
              variant="contained"
              className="loginButton"
            >
              Sign Up
            </Button>

            <Button
              component={RouterLink}
              to="/login"
              variant="contained"
              color="success"
              className="loginRegisterButton"
            >
              Log into Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
