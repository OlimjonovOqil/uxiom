import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

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
    <App />
  </>
);
