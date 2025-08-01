import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const handleClick = (name) => {
    setActiveItem(name);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-middele">
          <ul>
            <Link to="/home">
              <li
                className={`button ${activeItem === "Home" ? "clicked" : ""}`}
                onClick={() => handleClick("Home")}
              >
                Home
              </li>
            </Link>

            <Link to="/Landlords">
              <li
                className={`button ${
                  activeItem === "Landlords" ? "clicked" : ""
                }`}
                onClick={() => handleClick("Landlords")}
              >
                Landlords
              </li>
            </Link>

            <Link to="/Erasmus_Life">
              <li
                className={`button ${
                  activeItem === "Erasmus Life" ? "clicked" : ""
                }`}
                onClick={() => handleClick("Erasmus Life")}
              >
                Erasmus Life
              </li>
            </Link>

            <Link to="/About">
              <li
                className={`button ${
                  activeItem === "About Us" ? "clicked" : ""
                }`}
                onClick={() => handleClick("About Us")}
              >
                About Us
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-right">
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
