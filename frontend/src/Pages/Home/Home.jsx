import React from "react";
import Header from "../../Components/Header/Header";
import About_Wrap from "../../Components/About_Wrap/About_Wrap";
import Search_bar from "../../Components/Search_bar/Search_bar";
import Reservation_Process from "../../Components/Reservation_Process/Reservation_Process";
import Doubt_Section from "../../Components/Doubt_Section/Doubt_Section";

const Home = () => {
  return (
    <>
      <Header />
      <Search_bar />
      <About_Wrap />
      <Reservation_Process />
      <Doubt_Section />
    </>
  );
};

export default Home;
