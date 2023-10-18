import { keyframes, styled } from "styled-components";

const decreaseCircle = keyframes`
    0%{
    transform: scale(1.1) rotate(120deg);
  }
    100%{
    transform: scale(0.11) rotate(-90deg);
  }
`;

export const AnimationWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 44px 20px;
  display: ${({ $display }) => ($display ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  opacity: ${({ $start }) => ($start ? "1" : "0")};
`;

export const BigCircle = styled.div`
  background-color: #ffe66b;
  width: 330px;
  height: 330px;
  border-radius: 50%;
  position: relative;
  animation: ${decreaseCircle} 1.5s ease forwards;
`;

export const LittleCirle = styled.div`
  background-color: #f2f2f2;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  display: ${({ $show }) => ($show ? "block" : "none")};
`;

export const StartLogo = styled.div`
  background-image: url(${({ $logo }) => $logo});
  background-repeat: no-repeat;
  background-position: 0 0;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 176px;
  height: 36px;
  transform: translate(-65%, -50%);
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.5s ease;
`;
