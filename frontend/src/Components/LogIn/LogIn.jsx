import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";
import logo from "../../assets/logo.png";

const LogIn = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const Navigate = useNavigate();
  const [token, setToken] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }


  const handleClick = (e) => {
    e.preventDefault();

    console.log(token)
    if (token) {
      Navigate('/');
    }
  };
  return <>
    <div className="login">
      <img src={logo} alt="Company Logo" />
      <div className="login-content">
        <div className="login-text">
          <h1>Log in</h1>
          <p>Welcome back! Please enter your details</p>
        </div>
        <div className="login-form">
          <form>
            <div className="login-email">
              <label>Email</label>
              <input placeholder="Enter your email" type="email" name="email" value={data.email} onChange={handleChange} required /></div>
            <div className="login-password">
              <label>Password</label>
              <input placeholder="Enter your password" type="password" name="password" value={data.password} onChange={handleChange} required /></div>
            <div className="checkbox">
              <input type="checkbox" required />
              <p>Read Terms and Conditions.</p>
            </div>
            <button type="submit" onClick={handleClick}>Sign In</button>
          </form>
        </div>
        <span>Forgot password?</span>
      </div>
      <p className="navigate-page">Don't have an account? <button onClick={() => Navigate('/SignUp')}>Sign Up</button></p>
    </div>
  </>;
};

export default LogIn;
