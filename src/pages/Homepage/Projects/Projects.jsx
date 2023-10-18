import React from "react";
import * as s from "./Projects.styled";
import {
  Paragraph,
  Section,
  SectionScroll,
  SectionTitle,
} from "../../../GlobalStyles/Global.styled";
import image from "../../../assets/card.png";
import hoverImg from "../../../assets/image-hover.svg";
import { useNavigate } from "react-router-dom";

const productArray = [1, 2, 3, 4, 5, 6];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <>
      <Section>
        <SectionTitle $mb="88px">Projects</SectionTitle>
        <s.ProjectInner>
          {productArray.map((item) => (
            <s.Card
              key={item}
              onClick={() => {
                navigate(`project/${item}`);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <s.CardImgWrapper>
                <s.CardImg src={image} alt="card-img" />
                <s.CardImgHover src={hoverImg} alt="card-hover" />
              </s.CardImgWrapper>
              <s.CardInfo>
                <Paragraph $size="34px" $height="34px">
                  Project Name
                </Paragraph>
                <s.CardInfoLeft>
                  <Paragraph $height="20px">11/22</Paragraph>
                  <Paragraph $height="20px">Education</Paragraph>
                </s.CardInfoLeft>
              </s.CardInfo>
              <Paragraph $width="392px" $height="20px">
                Lorem ipsum dolor sit amet consectetur. Orci magna mauris aenean
                egestas sed turpis nisl ut.
              </Paragraph>
            </s.Card>
          ))}
        </s.ProjectInner>
      </Section>
      <SectionScroll id="services" />
    </>
  );
};

export default Projects;
