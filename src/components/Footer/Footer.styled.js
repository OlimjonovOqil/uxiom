import { styled } from "styled-components";
import { colors } from "../../GlobalStyles/Global.styled";

export const FooterInner = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  height: 296px;
  background-color: ${colors.black};
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  background-color: ${colors.black};
`;

export const FooterMenuLink = styled.div`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const FooterInfo = styled.div`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 201%;
  width: 350px;
`;
