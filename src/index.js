import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Projectsdetail from "./pages/ProjectsDetail/Projectsdetail";
import HomePage from "./pages/Homepage/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #F9F9F9;
  font-family: 'Chivo', sans-serif;
  background-color: transparent;
}

a{
  text-decoration: none;
}

ul{
  list-style-type: none;
}
`;

root.render(
  <>
    <Global />
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<Projectsdetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
