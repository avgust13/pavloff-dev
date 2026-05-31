import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      paper: string;
      paper2: string;
      card: string;
      ink: string;
      inkSoft: string;
      line: string;
      line2: string;
      green: string;
      amber: string;
    };
  }
}
