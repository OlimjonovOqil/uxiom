import React from "react";
import { Container } from "../../GlobalStyles/Global.styled";
import Header from "./Header/Header";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import About from "./About/About";
import Clients from "./Clients/Clients";
import MessageForm from "./MessageForm/MessageForm";
import Layout from "../../components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <Header />
        <Projects />
        <Services />
        <About />
        <Clients />
        <MessageForm />
      </Container>
    </Layout>
  );
};

export default HomePage;
