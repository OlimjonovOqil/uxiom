import { styled } from "styled-components";

export const colors = {
  black: "#000000",
  yellow: "#FFE66B",
  bg: "#F9F9F9",
};

export const AppWrapper = styled.div`
  max-width: 1440px;
  background-color: ${colors.black};
  /* background-color: ${colors.bg}; */
  padding: 32px;
  display: ${({ display }) => (display ? "none" : "flex")};
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const AppWrapperInner = styled.div`
  max-width: 1376px;
  width: 100%;
  margin: 0 auto;
  border-radius: 24px 24px 0 0;
  background-color: ${colors.bg};
  flex-grow: 1;
`;

export const Container = styled.div`
  max-width: 1140px;
  padding: 0 20px;
  margin: 0 auto;
  padding-top: 230px;
`;

export const Section = styled.section`
  margin-top: ${({ mt }) => mt || "150px"};
  margin-bottom: ${({ mb }) => mb || "0"};
`;

export const SectionTitle = styled.p`
  font-size: 64px;
  font-weight: 400;
  height: 70px;
  text-align: center;
  color: ${colors.black};
  margin-bottom: ${({ mb }) => mb || "72px"};
`;

export const Paragraph = styled.p`
  font-size: ${({ size }) => size || "16px"};
  line-height: ${({ height }) => height || "21.76px"};
  width: ${({ width }) => width || "100%"};
  color: ${({ color }) => color || colors.black};
`;

export const SectionItem = styled.div`
  width: 248px;
  cursor: pointer;
  padding: 17px 40px;
  border: ${({ border }) => (border ? "1px solid #000" : 0)};
  border-radius: 24px;
  color: ${({ color }) => color || "#444"};
  background-color: ${({ bg }) => (bg ? "#ffe66b" : "")};

  &:hover {
    transform: scale(1.01);
  }
`;

export const SectionScroll = styled.div`
  height: 100px;
`;
