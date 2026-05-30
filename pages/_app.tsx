import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import { Poppins, Inter } from "next/font/google";
import GlobalStyle from "@/components/globalstyles";

import 'bootstrap-icons/font/bootstrap-icons.css';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const theme: DefaultTheme = {
  colors: {
    primary: "#A6BBCC",
    secondary: "#FFFFFF",
    tertiary: "#D9D9D9",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className={`${poppins.variable} ${inter.variable} ${poppins.className}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
