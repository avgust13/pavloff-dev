import styled from "styled-components";

import SectionHead from "@/components/sections/titlesection";
import { Wrap } from "@/components/sharedstyles";

const SectionStyled = styled.section`
  padding: 76px 0;
  background: ${({ theme }) => theme.colors.paper2};
`;

const FaqListStyled = styled.div`
  details {
    border: 1px solid ${({ theme }) => theme.colors.line};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.card};
    margin-bottom: 10px;
    overflow: hidden;
  }

  summary {
    cursor: pointer;
    list-style: none;
    padding: 18px 22px;
    display: flex;
    gap: 14px;
    align-items: flex-start;
    font-family: var(--font-grotesk), sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.ink};
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary .q {
    color: ${({ theme }) => theme.colors.green};
    font-family: var(--font-mono), monospace;
    font-size: 14px;
    flex: none;
  }

  details[open] summary {
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  }

  details p {
    padding: 16px 22px 20px 46px;
    color: ${({ theme }) => theme.colors.inkSoft};
    font-size: 14px;
  }

  details p::before {
    content: "→ ";
    color: ${({ theme }) => theme.colors.green};
  }
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
    <SectionStyled id="faq">
      <Wrap>
        <SectionHead
          title="Eight questions founders ask before our first call."
          idx="06 · faq"
        />
        <FaqListStyled>
          {faqs.map((item, i) => (
            <details key={item.q}>
              <summary>
                <span className="q">Q{i + 1}</span>
                {item.q}
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </FaqListStyled>
      </Wrap>
    </SectionStyled>
  );
};

export default FaqSection;
