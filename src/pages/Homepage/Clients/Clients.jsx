import React from "react";
import * as s from "./Clients.styled";
import {
  Section,
  SectionItem,
  SectionScroll,
  SectionTitle,
} from "../../../GlobalStyles/Global.styled";
import { clientsData } from "../../../Data/Clients";

const Clients = () => {
  return (
    <>
      <Section $mt="200px">
        <SectionTitle>Our clients</SectionTitle>
        <s.ClientsInner>
          {clientsData.map((item) => (
            <SectionItem key={item.id} $select={false}>
              {item.name}
            </SectionItem>
          ))}
        </s.ClientsInner>
      </Section>
      <SectionScroll id="message" />
    </>
  );
};

export default Clients;
