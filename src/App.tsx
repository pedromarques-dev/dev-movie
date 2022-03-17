import React from "react";
import { AppRoutes } from "./pages/routes";
import { ChakraProvider } from '@chakra-ui/react'

const App: React.FC = () => {
  return (
    <>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </>
  );
};


// const GlobalStyle = createGlobalStyle`

//   * {
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;
//   }
  
//   body {
//     background-color: #111111;
//     color: white;
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   }

//   li {
//     list-style: none;
//   }

//   a {
//     text-decoration: none;
//     color: white;
//   }
// `;

export default App;
