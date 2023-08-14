import { keyframes, styled } from "styled-components";

const decreaseCircle = keyframes`
    0%{
    transform: scale(1.1) rotate(120deg);
  }
    100%{
    transform: scale(0.11) rotate(-90deg);
  }
`;

const BigCircle = styled.div`
  background-color: #ffe66b;
  width: 330px;
  height: 330px;
  border-radius: 50%;
  position: relative;
  animation: ${decreaseCircle} 1.5s ease forwards;
`;

const LittleCirle = styled.div`
  background-color: #f2f2f2;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const StartLogo = styled.div`
  background-image: url(${(props) => props.logo});
  background-repeat: no-repeat;
  background-position: 0 0;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 176px;
  height: 36px;
  transform: translate(-65%, -50%);
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

const StartAnimation = {
  BigCircle,
  LittleCirle,
  StartLogo,
};

export default StartAnimation;
