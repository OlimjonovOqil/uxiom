import React from "react";
import { Container } from "../../GlobalStyles/GlobalStyles";
import Header from "./Header/Header";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import About from "./About/About";
import Clients from "./Clients/Clients";
import MessageForm from "./MessageForm/MessageForm";

const HomePage = () => {
  return (
    <Container>
      <Header/>
      <Projects/>
      <Services/>
      <About/>
      <Clients/>
      <MessageForm/>
    </Container>
  );
};

export default HomePage;
