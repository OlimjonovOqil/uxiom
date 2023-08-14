import React from "react";
import * as s from "./FooterStyles";

const Footer = () => {
  return (
    <s.FooterInner>
      <s.FooterMenu>
        <s.FooterMenuLink to={"/"}>Home</s.FooterMenuLink>
        <s.FooterMenuLink to={"#progects"}>Work</s.FooterMenuLink>
        <s.FooterMenuLink to={"/services"}>Services</s.FooterMenuLink>
      </s.FooterMenu>
      <s.FooterInfo>
        1077, Budapest, Király u. 25 +11 44 555 7777 | hello@uxiomda.com
      </s.FooterInfo>
    </s.FooterInner>
  );
};

export default Footer;
