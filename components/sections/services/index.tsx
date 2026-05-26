import styled, { css } from "styled-components";
import Image from "next/image";

import Title from "@/components/sections/titlesection";

const ServicesSectionStyled = styled.section`
  max-width: 900px;
  width: 100%;
`;

const SubheadingStyled = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0 0 30px 0;
`;

const ServicesGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const ServiceCardStyled = styled.div<{ $isMain?: boolean }>`
  background-color: #f5f5f514;
  border-radius: 10px;
  padding: 28px 26px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
  }

  ${({ $isMain, theme }) =>
    $isMain &&
    css`
      border-top: 3px solid ${theme.colors.primary};
      background-color: #f5f5f51f;
    `}
`;

const MainBadgeStyled = styled.span`
  position: absolute;
  top: -12px;
  right: 20px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #221F1F;
  padding: 4px 10px;
  border-radius: 999px;
`;

const HeaderRowStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const IconStyled = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ServiceTitleStyled = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  line-height: 1.25;
`;

const ForLineStyled = styled.p`
  font-size: 13px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
  opacity: 0.85;
`;

const DescriptionStyled = styled.p`
  font-size: 14px;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
`;

const DeliverablesHeadingStyled = styled.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 4px;
`;

const DeliverablesListStyled = styled.ul`
  margin: 0;
  padding-left: 18px;
  list-style: disc;

  li {
    font-size: 13px;
    line-height: 1.55;
    color: ${({ theme }) => theme.colors.tertiary};
    margin-bottom: 4px;
  }
`;

const EngagementStyled = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.secondary};
  border-top: 1px solid rgba(166, 187, 204, 0.25);
  padding-top: 12px;
  margin-top: auto;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

const OtherExpertiseLineStyled = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.tertiary};
  opacity: 0.75;
  font-style: italic;
  margin: 0;
  text-align: center;
`;

type Service = {
  id: number;
  title: string;
  icon: string;
  isMain?: boolean;
  forLine: string;
  description: string;
  deliverables: string[];
  engagement: string;
};

const ServicesSection = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Fractional AI CTO",
      icon: "/icons/management.png",
      isMain: true,
      forLine:
        "For: pre-seed to Series A founders who need senior technical leadership without a $250K hire.",
      description:
        "I plug into your team 1–3 days a week and own the technical roadmap end-to-end: architecture, AI strategy, hiring, code reviews, vendor decisions. You stay focused on customers and fundraising.",
      deliverables: [
        "Weekly strategy calls + async Slack/Linear access",
        "Architecture and AI stack decisions with cost projections",
        "Hands-on code review and pair-programming with your team",
        "Engineer hiring screens (you keep the final call)",
        "Investor-ready technical narrative for your deck",
      ],
      engagement: "$3K–$8K/month · 3-month minimum",
    },
    {
      id: 2,
      title: "AI MVP — 90 days to ship",
      icon: "/icons/dev.png",
      isMain: true,
      forLine:
        "For: founders with validated demand and budget to build, not just prototype.",
      description:
        "Fixed scope, fixed timeline, fixed price. I design and build the v1 of your AI product so you can ship to first users within a quarter — without coordinating five freelancers yourself.",
      deliverables: [
        "Production codebase + deployed infrastructure",
        "AI integration (Claude / OpenAI / open-source models)",
        "Admin panel, observability, basic analytics",
        "2 weeks of post-launch support",
      ],
      engagement: "$15K–$45K · 8–12 weeks",
    },
    {
      id: 3,
      title: "AI Automation & Agentic Workflows",
      icon: "/icons/automation.png",
      forLine:
        "For: founders drowning in ops while their team should be building.",
      description:
        "Custom internal tools and agentic workflows that take 40+ hours of weekly busywork off your team — customer support, lead qualification, content ops, data pipelines.",
      deliverables: [
        "n8n / Claude agent workflows tailored to your stack",
        "Integrations with HubSpot, Stripe, Notion, and more",
        "Monitoring and alerting on workflow health",
        "Handoff documentation your team can maintain",
      ],
      engagement: "$5K–$20K · 2–6 weeks",
    },
    {
      id: 4,
      title: "AI Architecture Audit",
      icon: "/icons/ai.png",
      forLine:
        "For: founders inheriting code, evaluating a CTO candidate, or pre-fundraising due diligence.",
      description:
        "5-business-day deep dive into your codebase, AI choices, infrastructure, and cost model. You get an honest answer on “is this scalable?” and a prioritized fix list.",
      deliverables: [
        "25–40 page written report with red flags",
        "Prioritized remediation plan",
        "90-minute walkthrough call",
        "30 days of follow-up Slack access",
      ],
      engagement: "$2.5K · 1 week",
    },
  ];

  return (
    <ServicesSectionStyled id="services">
      <Title name="services" />
      <SubheadingStyled>
        Two ways to work with me, plus two productized engagements for narrower needs.
      </SubheadingStyled>
      <ServicesGridStyled>
        {services.map((service) => (
          <ServiceCardStyled key={service.id} $isMain={service.isMain}>
            {service.isMain && <MainBadgeStyled>Primary offer</MainBadgeStyled>}
            <HeaderRowStyled>
              <IconStyled>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={44}
                  height={44}
                />
              </IconStyled>
              <ServiceTitleStyled>{service.title}</ServiceTitleStyled>
            </HeaderRowStyled>
            <ForLineStyled>{service.forLine}</ForLineStyled>
            <DescriptionStyled>{service.description}</DescriptionStyled>
            <DeliverablesHeadingStyled>What you get</DeliverablesHeadingStyled>
            <DeliverablesListStyled>
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </DeliverablesListStyled>
            <EngagementStyled>
              <strong>Engagement:</strong> {service.engagement}
            </EngagementStyled>
          </ServiceCardStyled>
        ))}
      </ServicesGridStyled>
      <OtherExpertiseLineStyled>
        Looking for Computer Vision, Algorithmic Trading, or Blockchain work?{" "}
        <a href="mailto:avgust13@gmail.com?subject=Other%20expertise%20inquiry" style={{ color: "inherit", textDecoration: "underline" }}>
          Ask directly →
        </a>
      </OtherExpertiseLineStyled>
    </ServicesSectionStyled>
  );
};

export default ServicesSection;
