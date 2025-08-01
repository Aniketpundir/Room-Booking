import React, { useState } from "react";
import "./Doubt_Section.css";

const Doubt_Section = () => {
  const [data, setData] = useState({
    Full_Name: "",
    question: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <>
      <div data-aos="fade-up" className="Doubt_Section">
        <div data-aos="fade-up" className="section-content">
          <h1>Have questions or doubts?</h1>
          <p>Don’t hesitate contact us</p>
        </div>
        <div className="doubt-form">
          <form>
            <input
              onChange={onChangeHandler}
              type="text"
              placeholder="Full Name"
              required
              name="Full_Name"
              value={data.Full_Name}
            />
            <input
              onChange={onChangeHandler}
              type="text"
              placeholder="Enter any Question..."
              required
              name="question"
              value={data.question}
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Doubt_Section;
