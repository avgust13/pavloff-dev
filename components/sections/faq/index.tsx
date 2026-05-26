import styled from "styled-components";

import Title from "@/components/sections/titlesection";

const FaqSectionStyled = styled.section`
  max-width: 900px;
  width: 100%;
`;

const SubheadingStyled = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0 0 30px 0;
`;

const FaqListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 60px;
`;

const FaqItemStyled = styled.details`
  background-color: #f5f5f514;
  border-radius: 8px;
  padding: 0;
  transition: background-color 0.2s ease;
  overflow: hidden;

  &[open] {
    background-color: #f5f5f51f;
  }

  summary {
    cursor: pointer;
    padding: 18px 22px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
    line-height: 1.4;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: "+";
    font-size: 22px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1;
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  &[open] summary::after {
    content: "−";
    transform: rotate(0deg);
  }
`;

const AnswerStyled = styled.div`
  padding: 0 22px 20px 22px;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.tertiary};
`;

type FaqEntry = {
  q: string;
  a: string;
};

const FaqSection = () => {
  const faqs: FaqEntry[] = [
    {
      q: "I have an idea but no technical co-founder. Should we work together first, or should I keep looking?",
      a: "Both, in parallel. A Fractional CTO is the fastest way to validate that your idea is buildable before you commit equity with a co-founder. Many of my engagements end when the founder hires a permanent CTO — and I help them screen candidates.",
    },
    {
      q: "How is this different from hiring an agency?",
      a: "One senior person owns your product end-to-end instead of a project manager coordinating four juniors who rotate off your account. You ping me directly. I'm accountable for outcomes, not billable hours.",
    },
    {
      q: "What do I get in the first month?",
      a: "Week 1 — full audit of your current state (code, AI choices, infra, team). Week 2 — written technical roadmap with priorities, costs, and risks. Weeks 3–4 — execution starts on the top 2 priorities. You leave the first month with clarity, not slides.",
    },
    {
      q: "I'm pre-revenue. Can I afford this?",
      a: "The Architecture Audit ($2.5K, one week) is usually the right starting point pre-revenue. The retainer makes sense after you've validated demand or raised pre-seed.",
    },
    {
      q: "My idea is sensitive. Can we sign an NDA before talking?",
      a: "Yes. I'll send a mutual NDA before the first call if you prefer. Most founders find that 90% of the first conversation is about market, traction, and team — none of which is the secret part.",
    },
    {
      q: "Will you build it, or just advise?",
      a: "Both. On the retainer I'm hands-on (architecture, code review, sometimes writing the gnarly parts myself). On MVP projects I do most of the coding. I'm not a slides-only consultant.",
    },
    {
      q: "I already have a team. Where do you fit?",
      a: "I work with your team, not around it. I review PRs, pair with your engineers on AI integration, and write the kind of documentation that survives turnover. I never make your team look bad.",
    },
    {
      q: "How do we start?",
      a: "A free 30-minute discovery call. If we're a fit, I send a written proposal within 48 hours. The Architecture Audit is the lowest-risk way to start working together.",
    },
  ];

  return (
    <FaqSectionStyled id="faq">
      <Title name="faq" />
      <SubheadingStyled>
        Eight questions founders ask me before our first call. If yours isn&apos;t
        here, just email me.
      </SubheadingStyled>
      <FaqListStyled>
        {faqs.map((item) => (
          <FaqItemStyled key={item.q}>
            <summary>{item.q}</summary>
            <AnswerStyled>{item.a}</AnswerStyled>
          </FaqItemStyled>
        ))}
      </FaqListStyled>
    </FaqSectionStyled>
  );
};

export default FaqSection;
