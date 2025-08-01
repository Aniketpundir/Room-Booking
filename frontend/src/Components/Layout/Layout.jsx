import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  const location = useLocation();

  const hideLayoutPaths = ["/login", "/signup"];

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname.toLowerCase());
  return (
    <div>
      {!shouldHideLayout && <Navbar />}
      <Outlet />
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default Layout;
