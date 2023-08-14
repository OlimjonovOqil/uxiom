import React from "react";
import * as s from "./ProjectsStyles";
import {
  Paragraph,
  Section,
  SectionScroll,
  SectionTitle,
} from "../../../GlobalStyles/GlobalStyles";
import image from "../../../assets/card.png";
import hoverImg from "../../../assets/image-hover.svg";

const Projects = () => {
  return (
    <>
      <Section>
        <SectionTitle mb="88px">Projects</SectionTitle>
        <s.ProjectInner>
          <s.Card>
            <s.CardImgWrapper>
              <s.CardImg src={image} alt="card-img" />
              <s.CardImgHover src={hoverImg} alt="card-hover" />
            </s.CardImgWrapper>
            <s.CardInfo>
              <Paragraph size="34px" height="34px">
                Project Name
              </Paragraph>
              <s.CardInfoLeft>
                <Paragraph height="20px">11/22</Paragraph>
                <Paragraph height="20px">Education</Paragraph>
              </s.CardInfoLeft>
            </s.CardInfo>
            <Paragraph width="392px" height="20px">
              Lorem ipsum dolor sit amet consectetur. Orci magna mauris aenean
              egestas sed turpis nisl ut.
            </Paragraph>
          </s.Card>
          <s.Card>
            <s.CardImgWrapper>
              <s.CardImg src={image} alt="card-img" />
              <s.CardImgHover src={hoverImg} alt="card-hover" />
            </s.CardImgWrapper>
            <s.CardInfo>
              <Paragraph size="34px" height="34px">
                Project Name
              </Paragraph>
              <s.CardInfoLeft>
                <Paragraph height="20px">11/22</Paragraph>
                <Paragraph height="20px">Education</Paragraph>
              </s.CardInfoLeft>
            </s.CardInfo>
            <Paragraph width="392px" height="20px">
              Lorem ipsum dolor sit amet consectetur. Orci magna mauris aenean
              egestas sed turpis nisl ut.
            </Paragraph>
          </s.Card>
          <s.Card>
            <s.CardImgWrapper>
              <s.CardImg src={image} alt="card-img" />
              <s.CardImgHover src={hoverImg} alt="card-hover" />
            </s.CardImgWrapper>
            <s.CardInfo>
              <Paragraph size="34px" height="34px">
                Project Name
              </Paragraph>
              <s.CardInfoLeft>
                <Paragraph height="20px">11/22</Paragraph>
                <Paragraph height="20px">Education</Paragraph>
              </s.CardInfoLeft>
            </s.CardInfo>
            <Paragraph width="392px" height="20px">
              Lorem ipsum dolor sit amet consectetur. Orci magna mauris aenean
              egestas sed turpis nisl ut.
            </Paragraph>
          </s.Card>
          <s.Card>
            <s.CardImgWrapper>
              <s.CardImg src={image} alt="card-img" />
              <s.CardImgHover src={hoverImg} alt="card-hover" />
            </s.CardImgWrapper>
            <s.CardInfo>
              <Paragraph size="34px" height="34px">
                Project Name
              </Paragraph>
              <s.CardInfoLeft>
                <Paragraph height="20px">11/22</Paragraph>
                <Paragraph height="20px">Education</Paragraph>
              </s.CardInfoLeft>
            </s.CardInfo>
            <Paragraph width="392px" height="20px">
              Lorem ipsum dolor sit amet consectetur. Orci magna mauris aenean
              egestas sed turpis nisl ut.
            </Paragraph>
          </s.Card>
          <s.Card>
            <s.CardImgWrapper>
              <s.CardImg src={image} alt="card-img" />
              <s.CardImgHover src={hoverImg} alt="card-hover" />
            </s.CardImgWrapper>
            <s.CardInfo>
              <Paragraph size="34px" height="34px">
                Project Name
              </Paragraph>
              <s.CardInfoLeft>
                <Paragraph height="20px">11/22</Paragraph>
                <Paragraph height="20px">Education</Paragraph>
              </s.CardInfoLeft>
            </s.CardInfo>
            <Paragraph width="392px" height="20px">
              Lorem ipsum dolor sit amet consectetur. Orci magna mauris aenean
              egestas sed turpis nisl ut.
            </Paragraph>
          </s.Card>
          <s.Card>
            <s.CardImgWrapper>
              <s.CardImg src={image} alt="card-img" />
              <s.CardImgHover src={hoverImg} alt="card-hover" />
            </s.CardImgWrapper>
            <s.CardInfo>
              <Paragraph size="34px" height="34px">
                Project Name
              </Paragraph>
              <s.CardInfoLeft>
                <Paragraph height="20px">11/22</Paragraph>
                <Paragraph height="20px">Education</Paragraph>
              </s.CardInfoLeft>
            </s.CardInfo>
            <Paragraph width="392px" height="20px">
              Lorem ipsum dolor sit amet consectetur. Orci magna mauris aenean
              egestas sed turpis nisl ut.
            </Paragraph>
          </s.Card>
        </s.ProjectInner>
      </Section>
      <SectionScroll id="services" />
    </>
  );
};

export default Projects;
