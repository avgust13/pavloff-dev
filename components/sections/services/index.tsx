import styled, { css } from "styled-components";

import SectionHead from "@/components/sections/titlesection";
import { Wrap } from "@/components/sharedstyles";

const SectionStyled = styled.section`
  padding: 76px 0;
  background: ${({ theme }) => theme.colors.paper2};
`;

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const CardStyled = styled.div<{ $primary?: boolean }>`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 10px;
  padding: 28px 28px 30px;
  display: flex;
  flex-direction: column;
  position: relative;

  ${({ $primary, theme }) =>
    $primary &&
    css`
      border-color: ${theme.colors.green};
      box-shadow: 0 0 0 1px ${theme.colors.green};
    `}
`;

const TopStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const PillStyled = styled.span<{ $primary?: boolean }>`
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 9px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  color: ${({ theme }) => theme.colors.inkSoft};
  border-radius: 4px;

  ${({ $primary, theme }) =>
    $primary &&
    css`
      border-color: ${theme.colors.green};
      color: ${theme.colors.green};
      background: rgba(47, 125, 79, 0.08);
    `}
`;

const PriceStyled = styled.span`
  font-size: 13px;
  font-weight: 600;
`;

const CardHeadingStyled = styled.h3`
  font-family: var(--font-grotesk), sans-serif;
  font-weight: 600;
  font-size: 22px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 10px;
`;

const ForStyled = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin-bottom: 14px;
`;

const DescStyled = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.inkSoft};
`;

const ListStyled = styled.ul`
  list-style: none;
  margin: 18px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    font-size: 13px;
    padding-left: 22px;
    position: relative;
    color: ${({ theme }) => theme.colors.ink};
  }

  li::before {
    content: "+";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.green};
    font-weight: 700;
  }
`;

const EngagementStyled = styled.div`
  margin-top: auto;
  padding-top: 20px;
  font-size: 12.5px;
  color: ${({ theme }) => theme.colors.green};

  &::before {
    content: "› ";
  }
`;

const AsideStyled = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.colors.paper2};
  border: 1px dashed ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  padding: 18px 26px;
  font-size: 13px;

  a {
    color: ${({ theme }) => theme.colors.green};
    font-weight: 600;
  }
`;

const PromptStyled = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-weight: 600;
`;

type Service = {
  id: number;
  title: string;
  pill: string;
  price: string;
  primary?: boolean;
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
      pill: "primary",
      price: "$3–8K/mo",
      primary: true,
      forLine:
        "For pre-seed to Series A founders who need senior technical leadership without a $250K hire.",
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
      pill: "primary",
      price: "$15–45K",
      primary: true,
      forLine:
        "For founders with validated demand and budget to build, not just prototype.",
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
      pill: "productized",
      price: "$5–20K",
      forLine:
        "For founders drowning in ops while their team should be building.",
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
      pill: "productized",
      price: "$2.5K",
      forLine:
        "For founders inheriting code, evaluating a CTO candidate, or pre-fundraising due diligence.",
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
    <SectionStyled id="services">
      <Wrap>
        <SectionHead
          title="Two ways to work with me, plus two productized engagements."
          idx="02 · services"
        />
        <GridStyled>
          {services.map((service) => (
            <CardStyled key={service.id} $primary={service.primary}>
              <TopStyled>
                <PillStyled $primary={service.primary}>{service.pill}</PillStyled>
                <PriceStyled>{service.price}</PriceStyled>
              </TopStyled>
              <CardHeadingStyled>{service.title}</CardHeadingStyled>
              <ForStyled>{service.forLine}</ForStyled>
              <DescStyled>{service.description}</DescStyled>
              <ListStyled>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ListStyled>
              <EngagementStyled>{service.engagement}</EngagementStyled>
            </CardStyled>
          ))}
          <AsideStyled>
            <span>
              <PromptStyled>$</PromptStyled> computer-vision · algo-trading ·
              blockchain
            </span>
            <a href="mailto:avgust13@gmail.com?subject=Other%20expertise%20inquiry">
              ask directly →
            </a>
          </AsideStyled>
        </GridStyled>
      </Wrap>
    </SectionStyled>
  );
};

export default ServicesSection;
