import React from "react";
import * as s from "./AboutStyles";
import {
  Paragraph,
  Section,
  SectionTitle,
} from "../../../GlobalStyles/GlobalStyles";

const About = () => {
  return (
    <Section mt="160px">
      <SectionTitle>Who we are</SectionTitle>
      <s.AboutInner>
        <Paragraph width="500px">
          Lorem ipsum dolor sit amet consectetur. Dignissim ante turpis rhoncus
          mattis risus quam at. At vulputate egestas scelerisque commodo amet at
          ut commodo purus. Sit turpis ut id ac eget in venenatis. Sagittis
          pharetra morbi tincidunt laoreet velit purus ultricies mauris tortor.
          Eget ornare suspendisse purus est enim eget. Aliquet viverra in
          lobortis eget volutpat sed quisque convallis posuere. Nunc morbi amet
          magna faucibus ac libero venenatis diam.
        </Paragraph>
        <Paragraph width="500px">
          Lorem ipsum dolor sit amet consectetur. Dignissim ante turpis rhoncus
          mattis risus quam at. At vulputate egestas scelerisque commodo amet at
          ut commodo purus. Sit turpis ut id ac eget in venenatis. Sagittis
          pharetra morbi tincidunt laoreet velit purus ultricies mauris tortor.
          Eget ornare suspendisse purus est enim eget. Aliquet viverra in
          lobortis eget volutpat sed quisque convallis posuere. Nunc morbi amet
          magna faucibus ac libero venenatis diam.
        </Paragraph>
      </s.AboutInner>
    </Section>
  );
};

export default About;
