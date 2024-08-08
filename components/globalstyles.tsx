import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #221F1F;
    color: ${({ theme }) => theme.colors.secondary};
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 46px; 
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
