import * as s from "./Services.styled";
import {
  Paragraph,
  Section,
  SectionItem,
  SectionScroll,
  SectionTitle,
} from "../../../GlobalStyles/Global.styled";
import { useState } from "react";
import { servisesData } from "../../../Data/Services";

const Services = () => {
  const [selectedService, setSelectedService] = useState(1);
  const [serviceIndex, setServiceIndex] = useState(0);

  function handleSelect(id, index) {
    setSelectedService(id);
    setServiceIndex(index);
  }

  return (
    <>
      <Section>
        <SectionTitle>Our services</SectionTitle>
        <s.ServicesInner>
          <s.ServiceItems>
            {servisesData.map((item, index) => (
              <SectionItem
                key={item.id}
                $select={selectedService === item.id}
                onClick={() => handleSelect(item.id, index)}
              >
                {item.name}
              </SectionItem>
            ))}
          </s.ServiceItems>
          <Paragraph $width="333px">
            {servisesData[serviceIndex].desc}
          </Paragraph>
        </s.ServicesInner>
      </Section>
      <SectionScroll id="about" />
    </>
  );
};

export default Services;
