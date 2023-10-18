import React from "react";
import * as s from "./MessageForm.styled";
import { Section, SectionTitle } from "../../../GlobalStyles/Global.styled";

const MessageForm = () => {
  return (
    <Section $mb="141px">
      <SectionTitle $mb="76px">Get in touch</SectionTitle>
      <s.MessageSectionFrom>
        <s.InputForm>
          <s.FormInput placeholder="First Name*" required type="name" />
          <s.FormInput placeholder="Last Name" type="name" />
          <s.FormInput placeholder="E-mail*" required type="email" />
          <s.FormInput placeholder="Phone number" type="name" />
        </s.InputForm>
        <s.FormTextarea placeholder="Message*" />
        <s.FormButton>Send message</s.FormButton>
      </s.MessageSectionFrom>
    </Section>
  );
};

export default MessageForm;
