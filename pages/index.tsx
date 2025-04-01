import Head from "next/head";
import { Container, Main } from "@/components/sharedstyles";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import SkillsSection from "@/components/sections/Skills";
import ServicesSection from "@/components/sections/Services";
// import ExperienceSection from "@/components/sections/experience";
import CertificationSection from "@/components/sections/Certification";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Ros - Software Engineer - IT Development Services</title>
        <meta
          name="description"
          content="Ros - Software Engineer - IT Development Services"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
      </Head>
      <Main>
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <CertificationSection />
        <Footer />
      </Main>
    </Container>
  );
}
