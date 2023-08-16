import React, { useState } from "react";
import "./loginSignup.css";
import person from "../Assets/person.png";
import email from "../Assets/email.png";
import password from "../Assets/password.png";
import show from "../Assets/show.png";
import hide from "../Assets/hide.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [showPassword, setShowPassword] = useState("false");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={person} alt="person" className="icon" />
            <input type="text" placeholder="Username" required />
          </div>
        )}
        <div className="input">
          <img src={email} alt="email" className="icon" />
          <input type="email" placeholder="Email Address" required />
        </div>
        <div className="input">
          <img src={password} alt="password" className="icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password "
            required
          />
          <span className="showHide" onClick={togglePasswordVisibility}>
            <img
              src={hide}
              alt="hide"
              className={showPassword ? "show" : "hide"}
            />
            <img src={show} alt="show" className={showPassword ? "hide" : ""} />
          </span>
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot_password">
          Forget Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit_container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
