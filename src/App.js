import { styled } from "styled-components";
import { useEffect, useState } from "react";
import logo from "./assets/Group2.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projectsdetail from "./pages/ProjectsDetail/Projectsdetail";
import HomePage from "./pages/Homepage/HomePage";
import StartAnimation from "./components/StartAnimation/StartAnimation";

const AppRouter = styled.div`
  display: ${({ $display }) => ($display ? "none" : "block")};
`;

function App() {
  const [showSmallCircle, setShowSmallCircle] = useState(false);
  const [showLogoText, setShowLogoText] = useState(false);
  const [start, setStart] = useState(true);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSmallCircle(true);
    }, 800);
    setTimeout(() => {
      setShowLogoText(true);
    }, 2000);
    setTimeout(() => {
      setStart(false);
    }, 3000);
    setTimeout(() => {
      setDisplay(false);
    }, 3700);
  }, []);

  return (
    <>
      <StartAnimation
        display={display}
        start={start}
        logo={logo}
        showLogoText={showLogoText}
        showSmallCircle={showSmallCircle}
      />
      <AppRouter $display={display}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<Projectsdetail />} />
          </Routes>
        </BrowserRouter>
      </AppRouter>
    </>
  );
}

export default App;
