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

const SITE_URL = "https://pavloff.dev";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const DESCRIPTION =
  "Senior AI Engineer partnering with founders two ways: as your Fractional AI CTO ($3-8K/mo) or by shipping your AI MVP in 90 days. 20+ years. Anthropic-certified.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#ros`,
      name: "Ros Pavloff",
      alternateName: "Rostislavs Pavlovs",
      jobTitle: "Fractional AI CTO & Senior AI Engineer",
      url: SITE_URL,
      image: OG_IMAGE,
      email: "mailto:avgust13@gmail.com",
      knowsAbout: [
        "Artificial Intelligence",
        "Claude API",
        "Agentic Workflows",
        "Machine Learning",
        "n8n Automation",
        "Full-Stack Development",
        "Technical Leadership",
      ],
      sameAs: [
        "https://www.linkedin.com/in/ros-pavloff",
        "https://github.com/avgust13",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "pavloff.dev — Fractional AI CTO & AI MVP development",
      url: SITE_URL,
      image: OG_IMAGE,
      description: DESCRIPTION,
      provider: { "@id": `${SITE_URL}/#ros` },
      areaServed: ["United States", "United Kingdom", "European Union"],
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fractional AI CTO" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI MVP Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation & Agentic Workflows" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Architecture Audit" } },
      ],
    },
  ],
};

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Fractional AI CTO & AI MVP Builder for Founders | Ros Pavloff</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="fractional ai cto, ai technical cofounder, ai mvp development, claude api consultant, senior ai engineer for hire, n8n consultant"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:title" content="Fractional AI CTO & AI MVP Builder for Founders | Ros Pavloff" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="pavloff.dev" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ros Pavloff — Fractional AI CTO & AI MVP for founders" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fractional AI CTO & AI MVP Builder for Founders | Ros Pavloff" />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <link rel="icon" href="/favicon.ico" />

        {/* Structured data */}
        {/* eslint-disable-next-line react/no-danger */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static, trusted JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
