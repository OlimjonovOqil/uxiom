import { keyframes, styled } from "styled-components";
import { colors } from "../../../GlobalStyles/Global.styled";

const YellowMove = keyframes`
  0%{
    transform: translateX(0);
  }
  25%{
    transform: translateX(-95px);
  }
  50%{
    transform: translate(15px,-35px);
  }
  100%{
    transform: translate(0,0);
  }
`;

const BlackMove = keyframes`
  0%{
    transform: translateX(0);
  }
  25%{
    transform: translate(-60px, 60px);
  }
  50%{
    transform: translate(-100px, 100px);
  }
  100%{
    transform: translate(0,0);
  }
`;

export const HeaderInner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 171px);
  border-radius: 24px 24pz 0 0;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const HeaderTitle = styled.div`
  width: 680px;
  color: ${colors.black};
  font-family: "Chonburi", cursive;
  font-size: 54px;
  font-style: normal;
  font-weight: 400;
  line-height: 70px;
`;

export const HeaderLogo = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const YellowCircle = styled.img`
  position: absolute;
  right: -40px;
  top: 130px;
  width: 333px;
  height: 331px;
  animation: ${YellowMove} 7s infinite ease-in-out;
`;

export const BlackCircle = styled.img`
  position: absolute;
  left: 74px;
  bottom: 210px;
  width: 100px;
  height: 100px;
  z-index: 10;
  animation: ${BlackMove} 7s infinite ease-in-out;
`;
