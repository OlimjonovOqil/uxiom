import React from "react";
import * as s from "./ClientsStyles";
import {
  Section,
  SectionItem,
  SectionScroll,
  SectionTitle,
} from "../../../GlobalStyles/GlobalStyles";

const Clients = () => {
  return (
    <>
      <Section mt="200px">
        <SectionTitle>Our clients</SectionTitle>
        <s.ClientsInner>
          <SectionItem bg={false} color={false} border={true}>
            Company Name
          </SectionItem>
          <SectionItem bg={false} color={false} border={true}>
            Company Name
          </SectionItem>
          <SectionItem bg={false} color={false} border={true}>
            Company Name
          </SectionItem>
          <SectionItem bg={false} color={false} border={true}>
            Company Name
          </SectionItem>
          <SectionItem bg={false} color={false} border={true}>
            Company Name
          </SectionItem>
          <SectionItem bg={false} color={false} border={true}>
            Company Name
          </SectionItem>
          <SectionItem bg={false} color={false} border={true}>
            Company Name
          </SectionItem>
          <SectionItem bg={false} color={false} border={true}>
            Company Name
          </SectionItem>
        </s.ClientsInner>
      </Section>
      <SectionScroll id="message" />
    </>
  );
};

export default Clients;
