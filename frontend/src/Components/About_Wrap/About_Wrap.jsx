import React from "react";
import "./About_Wrap.css";
import img1 from "../../assets/about_wrap.jpg";
import img2 from "../../assets/about_wrap2.jpg";

const facility = [
  {
    id: 1,
    name: "Professional Team",
  },
  {
    id: 2,
    name: "Always in touch",
  },
  {
    id: 3,
    name: "Verified Rooms",
  },
  {
    id: 4,
    name: "Fast and Secure Booking",
  },
];

const About_Wrap = () => {
  return (
    <>
      <div className="about-wrap">
        <div className="about-wrap-image">
          <img className="img1" src={img1} alt="" data-aos="fade-up" />
          <img className="img2" src={img2} alt="" data-aos="fade-up" />
        </div>
        <div className="about-wrap-text" data-aos="fade-up">
          <div className="about-wrap-text-top">
            <h1>We Help Students Find Their Perfect Home</h1>
            <p>About Us</p>
          </div>
          <div className="about-wrap-text-middele">
            <p>
              Erasmus Life Housing is your go-to hub for finding the perfect
              home for students, by students. Since 2025, our team has helped
              tons of students discover their ideal place. We’ve got a wide
              selection of student-friendly rooms, all built and managed just
              for you.
            </p>
            <p>
              Our ultimate goal is to make Lisbon the number one destination for
              International Students and Young Workers, and we most surely don’t
              want that your experience finding accommodation to be a negative
              point of that experience!
            </p>
          </div>

          <div className="about-wrap-text-bottom">
            {facility.map((items, index) => {
              return (
                <div key={index} className="facility">
                  <p>
                    <span>✔</span> {items.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About_Wrap;
