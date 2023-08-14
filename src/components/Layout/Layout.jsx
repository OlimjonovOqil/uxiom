import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import * as s from "../../GlobalStyles/GlobalStyles";

const Layout = () => {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 3500);
  }, []);

  return (
    <s.AppWrapper display={display}>
      <s.AppWrapperInner>
        <Navbar />
        <Outlet />
      </s.AppWrapperInner>
      <Footer />
    </s.AppWrapper>
  );
};

export default Layout;
