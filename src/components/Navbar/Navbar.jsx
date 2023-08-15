import React, { useEffect, useState } from "react";
import * as s from "./NavbarStyled";
import logoText from "../../assets/Group2.svg";
import logo from "../../assets/navbar-logo.svg";

const Navbar = () => {
  const [scrollDistance, setScrollDistance] = useState(0);
  const [logoScale, setLogoScale] = useState(1);
  const [logoTextOpacity, setLogoTextOpacity] = useState(1);

  const handleScroll = () => {
    if (window.screenY <= 60) {
      setScrollDistance(window.pageYOffset);
      setLogoTextOpacity(1 - window.pageYOffset * 0.016);
      setLogoScale(1 + window.pageYOffset * 0.015);
    } else {
      setScrollDistance(60);
      setLogoScale(1.9);
      setLogoTextOpacity(0);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <s.NavbarWrapper>
      <s.Navbar>
        <s.Logotip onClick={scrollTop}>
          <s.LogoText src={logoText} alt="logo" opacity={logoTextOpacity} />
          <s.Logo
            src={logo}
            alt="logo"
            move={scrollDistance}
            scale={logoScale}
          />
        </s.Logotip>
        <s.NavbarMenu>
          <s.NavbarMenuItem>
            <s.NavbarMenuItemLink to="projects" smooth={true} duration={500}>
              Projects
            </s.NavbarMenuItemLink>
          </s.NavbarMenuItem>
          <s.NavbarMenuItem>
            <s.NavbarMenuItemLink to="services" smooth={true} duration={500}>
              Services
            </s.NavbarMenuItemLink>
          </s.NavbarMenuItem>
          <s.NavbarMenuItem>
            <s.NavbarMenuItemLink to="about" smooth={true} duration={500}>
              About
            </s.NavbarMenuItemLink>
          </s.NavbarMenuItem>
          <s.NavbarMenuItem>
            <s.NavbarBuutonLink to="message" smooth={true} duration={500}>
              Let’s Talk
            </s.NavbarBuutonLink>
          </s.NavbarMenuItem>
        </s.NavbarMenu>
      </s.Navbar>
    </s.NavbarWrapper>
  );
};

export default Navbar;
