import React, { useState } from "react";
import "./Search_bar.css";

const Search_bar = () => {
  const [data, setData] = useState({
    Location: "",
    Budget: "",
    Check_In: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  return (
    <>
      <div data-aos="fade-in" className="hearder-search-bar">
        <div className="search-bar">
          <h3>Search for available rooms</h3>
          <form>
            <input
              data-aos="fade-up"
              type="text"
              onChange={onChangeHandler}
              name="Location"
              value={data.Location}
              placeholder="Location"
              required
            />
            <input
              data-aos="fade-up"
              type="text"
              onChange={onChangeHandler}
              name="Budget"
              value={data.Budget}
              placeholder="Budget"
              required
            />
            <input
              data-aos="fade-up"
              type="text"
              onChange={onChangeHandler}
              name="Check_In"
              value={data.Check_In}
              placeholder="Check In"
              required
            />
            <button data-aos="fade-up">Search</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search_bar;
