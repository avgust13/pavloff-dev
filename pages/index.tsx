import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "@/components/sharedstyles";
import Cards from "@/components/cards";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Ros - Software Engineer - IT Development Services</title>
        <meta name="description" content="Ros - Software Engineer - IT Development Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          I'm Ros - Software Developer!
        </Title>

        {/* <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description> */}

        {/* <Cards /> */}
      </Main>
    </Container>
  );
}
