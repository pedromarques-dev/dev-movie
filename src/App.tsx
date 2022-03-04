import React from "react";
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./pages/routes";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
};

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #111111;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

export default App;
