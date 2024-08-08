import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/components/globalstyles";

const theme: DefaultTheme = {
  colors: {
    primary: "#A6BBCC",
    secondary: "#FFFFFF",
    tertiary: "#D9D9D9",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
