import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.paper};
    color: ${({ theme }) => theme.colors.ink};
    font-family: var(--font-mono), ui-monospace, Menlo, monospace;
    font-size: 15px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.paper2};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.line};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

export default GlobalStyle;
