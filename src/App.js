import { styled } from "styled-components";
import StartAnimation from "./components/StartAnimation/StartAnimation";
import { useEffect, useState } from "react";
import logo from "./assets/Group2.svg";

const AnimationWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 44px 20px;
  display: ${({ display }) => (display ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  opacity: ${({ start }) => (start ? "1" : "0")};
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
    <AnimationWrapper display={display} start={start}>
      <StartAnimation.StartLogo
        logo={logo}
        show={showLogoText}
        display={display}
      />
      <StartAnimation.BigCircle>
        <StartAnimation.LittleCirle show={showSmallCircle} />
      </StartAnimation.BigCircle>
    </AnimationWrapper>
  );
}

export default App;
