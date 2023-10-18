import React from "react";
import * as s from "./Footer.styled";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <s.FooterInner>
      <s.FooterMenu>
        <s.FooterMenuLink
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            navigate("/");
          }}
        >
          Home
        </s.FooterMenuLink>
        <s.FooterMenuLink
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            navigate("/");
          }}
        >
          Work
        </s.FooterMenuLink>
        <s.FooterMenuLink
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            navigate("/");
          }}
        >
          Services
        </s.FooterMenuLink>
      </s.FooterMenu>
      <s.FooterInfo>
        1077, Budapest, Király u. 25 +11 44 555 7777 | hello@uxiomda.com
      </s.FooterInfo>
    </s.FooterInner>
  );
};

export default Footer;
