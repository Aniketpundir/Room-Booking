import React, { useState } from "react";
import "./Header.css";
import Image from "../../assets/hero_image.jpg";

const counting = [
  {
    id: 1,
    Number: "4235",
    type: "Room",
  },
  {
    id: 2,
    Number: "535",
    type: "Reservation",
  },
  {
    id: 1,
    Number: "19905",
    type: "Students",
  },
];

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="header-text" data-aos="fade-right">
            <h1>
              Find Your Future <br /> <span>Dream Accommodation</span>
            </h1>
            <p>
              Want to find an accommodation? We are ready to <br /> help you
              find one that suits your lifestyle and needs.
            </p>
            <div className="header-digits">
              {counting.map((items, index) => {
                return (
                  <div key={index} className="counting">
                    <h1>
                      {items.Number}
                      <span>+</span>
                    </h1>
                    <p>{items.type}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="header-image" data-aos="fade-left">
            <img src={Image} alt="hero-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
