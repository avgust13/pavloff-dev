import Head from "next/head";
import { Container, Main } from "@/components/sharedstyles";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import CaseStudiesSection from "@/components/sections/case-studies";
import SkillsSection from "@/components/sections/skills";
import CertificationSection from "@/components/sections/certification";
import FaqSection from "@/components/sections/faq";
import FinalCtaSection from "@/components/sections/final-cta";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Fractional AI CTO & AI MVP Builder for Founders | Ros Pavloff</title>
        <meta
          name="description"
          content="Senior AI Engineer partnering with founders two ways: as your Fractional AI CTO ($3-8K/mo) or by shipping your AI MVP in 90 days. 15+ years. Anthropic-certified."
        />
        <meta
          name="keywords"
          content="fractional ai cto, ai technical cofounder, ai mvp development, claude api consultant, senior ai engineer for hire, n8n consultant"
        />
        <meta property="og:title" content="Fractional AI CTO & AI MVP Builder for Founders | Ros Pavloff" />
        <meta
          property="og:description"
          content="Senior AI Engineer partnering with founders two ways: as your Fractional AI CTO or by shipping your AI MVP in 90 days. Anthropic-certified."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pavloff.dev" />
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
        <CaseStudiesSection />
        <SkillsSection />
        <CertificationSection />
        <FaqSection />
        <FinalCtaSection />
        <Footer />
      </Main>
    </Container>
  );
}
