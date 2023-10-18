import React, { useEffect, useState } from "react";
import * as s from "./Navbar.styled";
import logoText from "../../assets/Group2.svg";
import logo from "../../assets/navbar-logo.svg";
import { useNavigate } from "react-router-dom";
import { navbarData } from "../../Data/NavbarData";

const Navbar = () => {
  const [scrollDistance, setScrollDistance] = useState(0);
  const [logoScale, setLogoScale] = useState(1);
  const [logoTextOpacity, setLogoTextOpacity] = useState(1);

  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.screenY <= 60) {
      setScrollDistance(window.scrollY);
      setLogoTextOpacity(1 - window.scrollY * 0.016);
      setLogoScale(1 + window.scrollY * 0.015);
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
    navigate("/");
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
        <s.NavbarItems>
          <s.Logotip onClick={scrollTop}>
            <s.LogoText src={logoText} alt="logo" $opacity={logoTextOpacity} />
            <s.Logo
              src={logo}
              alt="logo"
              $move={scrollDistance}
              $scale={logoScale}
            />
          </s.Logotip>
          <s.NavbarMenu>
            {navbarData.map((item) => (
              <s.NavbarMenuItem key={item.id}>
                <s.NavbarMenuItemLink
                  to={item.link}
                  smooth={true}
                  $duration={500}
                >
                  {item.name}
                </s.NavbarMenuItemLink>
              </s.NavbarMenuItem>
            ))}
            <s.NavbarMenuItem>
              <s.NavbarBuutonLink to="message" smooth={true} $duration={500}>
                Let’s Talk
              </s.NavbarBuutonLink>
            </s.NavbarMenuItem>
          </s.NavbarMenu>
        </s.NavbarItems>
      </s.Navbar>
    </s.NavbarWrapper>
  );
};

export default Navbar;
