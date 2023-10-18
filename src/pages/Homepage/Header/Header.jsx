import * as s from "./Heade.styled";
import { Paragraph, SectionScroll } from "../../../GlobalStyles/Global.styled";
import blackCircle from "../../../assets/black-circle.svg";
import yellowCircle from "../../../assets/yellow-circle.svg";

const Header = () => {
  return (
    <>
      <s.HeaderInner>
        <s.HeaderText>
          <s.HeaderTitle>
            Hi, we are Uxiom. A web design agency based in Budapest.
          </s.HeaderTitle>
          <Paragraph $size={"24px"} $height={"35px"} $width={"411px"}>
            We design and develop websites, web applications, and mobile apps
            that move business forward.
          </Paragraph>
        </s.HeaderText>
        <s.HeaderLogo>
          <s.BlackCircle src={blackCircle} />
          <s.YellowCircle src={yellowCircle} />
        </s.HeaderLogo>
      </s.HeaderInner>
      <SectionScroll id="projects" />
    </>
  );
};

export default Header;
