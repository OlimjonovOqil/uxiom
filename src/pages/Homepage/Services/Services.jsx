import * as s from "./ServicesStyles";
import {
  Paragraph,
  Section,
  SectionItem,
  SectionScroll,
  SectionTitle,
} from "../../../GlobalStyles/GlobalStyles";

const Services = () => {
  return (
    <>
      <Section>
        <SectionTitle>Our services</SectionTitle>
        <s.ServicesInner>
          <s.ServiceItems>
            <SectionItem bg={true} color={true} border={false}>
              Research
            </SectionItem>
            <SectionItem bg={false} color={false} border={true}>
              Design
            </SectionItem>
            <SectionItem bg={false} color={false} border={true}>
              Development
            </SectionItem>
            <SectionItem bg={false} color={false} border={true}>
              Branding
            </SectionItem>
          </s.ServiceItems>
          <Paragraph width="333px">
            Lorem ipsum dolor sit amet consectetur. Elementum vitae quam sed
            curabitur proin sit. Nunc viverra at porttitor feugiat sed urna.
            Felis pellentesque et lectus pellentesque.
          </Paragraph>
        </s.ServicesInner>
      </Section>
      <SectionScroll id="about" />
    </>
  );
};

export default Services;
