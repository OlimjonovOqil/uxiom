import { styled } from "styled-components";
import { colors } from "../../GlobalStyles/Global.styled";
import { Link } from "react-scroll";

export const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  max-width: 1376px;
  margin: 0 auto;
  background-color: ${colors.black};
  transition: all 1s ease;
  z-index: 100000;
`;

export const Navbar = styled.nav`
  width: 100%;
  position: relative;
  height: 171px;
  padding: 0 66px 0 68px;
  background: linear-gradient(
      180deg,
      #f9f9f9 44.04%,
      rgba(249, 249, 249, 0) 93.12%
    ),
    rgba(249, 249, 249, 0);
  border-radius: 24px 24px 0 0;
  z-index: 100 !important;
`;

export const NavbarItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100 !important;
  padding: 43px 12px 8px 12px;
`;

export const Logotip = styled.div`
  width: 114px;
  height: 23px;
  position: relative;
  cursor: pointer;
  transition: all 1s ease;
`;

export const LogoText = styled.img`
  width: 100%;
  opacity: ${({ $opacity }) => $opacity};
  transition: all 0.3s ease;
`;

export const Logo = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 62px;
  width: 23px;
  height: 23px;
  transform: translate(${({ $move }) => ($move > 60 ? "-60px" : `-${$move}px`)})
    scale(${({ $scale }) => ($scale > 1.9 ? "1.9" : $scale)});
  transition: all 0.5s ease;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const NavbarMenuItem = styled.li`
  height: 100%;
`;

export const NavbarMenuItemLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: ${colors.black};
`;

export const NavbarButton = styled.button`
  border: 0;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 20px;
  background-color: ${colors.black};
  color: ${colors.bg};
`;

export const NavbarBuutonLink = styled(Link)`
  text-decoration: none;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 20px;
  background-color: ${colors.black};
  color: ${colors.bg};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
`;
