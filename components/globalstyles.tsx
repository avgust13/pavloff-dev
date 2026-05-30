import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #221F1F;
    color: ${({ theme }) => theme.colors.secondary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 46px; 
    margin: 0 0 30px 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
      width: 12px; 
      height: 12px; 
  }

  ::-webkit-scrollbar-track {
      background: #383838;
  }

  ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 3px;
  }
`;

export default GlobalStyle;