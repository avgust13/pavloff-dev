import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import GlobalStyle from "@/components/globalstyles";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-grotesk",
});

// Mono / Dev-tooling — paper-toned terminal palette.
const theme: DefaultTheme = {
  colors: {
    paper: "#eceae2",
    paper2: "#e3e0d6",
    card: "#f4f2ea",
    ink: "#1a1a17",
    inkSoft: "#5b594f",
    line: "#c9c5b6",
    line2: "#d8d4c6",
    green: "#2f7d4f",
    amber: "#b06d18",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div
        className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} ${jetbrainsMono.className}`}
      >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
