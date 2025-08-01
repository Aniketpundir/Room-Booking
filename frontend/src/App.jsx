import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import About from "./Pages/About/About";
import Erasmus_Life from "./Pages/Erasmus Life/Erasmus_Life";
import Landlords from "./Pages/Landlords/Landlords";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/About" element={<About />} />
      <Route path="/Erasmus_Life" element={<Erasmus_Life />} />
      <Route path="/Landlords" element={<Landlords />} />
    </Route>
  )
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      delay: 200,
      easing: "ease-in-out",
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);


  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
