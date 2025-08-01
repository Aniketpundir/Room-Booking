import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import OTP from "../OtpButton/OtpButton"
import "./SignUp.css";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    OTP: "",
    password: ""
  });
  const Navigate = useNavigate();
  const [tokens, setTokens] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  console.log(data)

  const handleClick = (e) => {
    e.preventDefault();

    console.log(tokens)
    if (tokens) {
      Navigate('/');
    }
  };
  return <>
    <div className="SignUp">
      <div className="SihnUp-content">
        <div className="SignUp-text">
          <h1>Sign Up</h1>
        </div>
        <div className="SignUp-form">
          <form>
            <div className="SignUp-name">
              <label>Name*</label>
              <input placeholder="Enter Your Full Name" type="text" name="name" value={data.name} onChange={handleChange} required />
            </div>
            <div className="SignUp-number">
              <label>Mobile No.*</label>
              <input placeholder="Enter Your Mobile Number" type="text" name="number" value={data.number} onChange={handleChange} required />
            </div>
            <div className="SignUp-email">
              <label>Email*</label>
              <input placeholder="Enter your email" type="email" name="email" value={data.email} onChange={handleChange} required />
            </div>
            <div className="SignUp-otp">
              <input placeholder="Enter One Time Password(OTP)" type="text" name="OTP" value={data.OTP} onChange={handleChange} required />
              <div className="otp"></div>
              <OTP />
            </div>
            <div className="SignUp-password">
              <label>Password*</label>
              <input placeholder="Enter One Password" type="text" name="password" value={data.password} onChange={handleChange} required />
            </div>
            <div className="checkbox">
              <input type="checkbox" required />
              <p>Read Terms and Conditions.</p>
            </div>
            <button className="account-button" onClick={handleClick}>Create Account</button>
          </form>
        </div>
        <p className="navigate-page">Already have an account? <button onClick={() => Navigate("/login")}>Log In</button></p>
      </div>
    </div>
  </>;
};

export default SignUp;
