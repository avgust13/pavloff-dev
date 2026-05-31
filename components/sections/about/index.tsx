import styled from "styled-components";

import SectionHead from "@/components/sections/titlesection";
import { Wrap } from "@/components/sharedstyles";

const SectionStyled = styled.section`
  padding: 76px 0;
`;

const WhyGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: ${({ theme }) => theme.colors.line};
  border: 1px solid ${({ theme }) => theme.colors.line};

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const WhyCardStyled = styled.div`
  background: ${({ theme }) => theme.colors.card};
  padding: 30px 30px 34px;
`;

const TagStyled = styled.span`
  display: block;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.green};
  margin-bottom: 14px;
`;

const CardHeadingStyled = styled.h3`
  font-family: var(--font-grotesk), sans-serif;
  font-weight: 600;
  font-size: 19px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 10px;
`;

const CardBodyStyled = styled.p`
  color: ${({ theme }) => theme.colors.inkSoft};
  font-size: 14px;
`;

const FootNoteStyled = styled.p`
  margin-top: 22px;
  color: ${({ theme }) => theme.colors.inkSoft};
  font-size: 13.5px;

  &::before {
    content: "// ";
    color: ${({ theme }) => theme.colors.green};
  }
`;

const AboutSection = () => {
  const tiles = [
    {
      heading: "I've shipped, not just studied AI.",
      body: "Two decades building production systems before AI became the hype. I know what breaks at scale, what investors look for in the codebase, and what a $20/mo OpenAI bill becomes at 10,000 users.",
    },
    {
      heading: "I speak founder, not just engineer.",
      body: "Most non-technical founders get burned hiring overseas devs who code what's asked, not what's needed. I push back, prototype fast, and translate “I think we need a vector DB” into “here's what it costs you and whether it's worth it.”",
    },
    {
      heading: "AI-native by certification, not by trend.",
      body: "Certified by Anthropic on Claude APIs, agentic workflows, and Claude Code (May 2026). My day-to-day stack is Claude + n8n + TypeScript + Python. No “we'll figure out AI when we get there.”",
    },
    {
      heading: "You get a partner, not a vendor.",
      body: "One Slack channel. Weekly calls. Decisions documented. Code your next hire can read. I write you out of bus-factor risk from day one.",
    },
  ];

  return (
    <SectionStyled id="why">
      <Wrap>
        <SectionHead
          title="Why founders hire me instead of an agency or a junior team."
          idx="01 · why_me"
        />
        <WhyGridStyled>
          {tiles.map((tile, i) => (
            <WhyCardStyled key={tile.heading}>
              <TagStyled>[{String(i + 1).padStart(2, "0")}]</TagStyled>
              <CardHeadingStyled>{tile.heading}</CardHeadingStyled>
              <CardBodyStyled>{tile.body}</CardBodyStyled>
            </WhyCardStyled>
          ))}
        </WhyGridStyled>
        <FootNoteStyled>
          Background also includes algorithmic trading systems, computer vision
          pipelines, and blockchain dApps. If that&apos;s what you need, ask.
        </FootNoteStyled>
      </Wrap>
    </SectionStyled>
  );
};

export default AboutSection;
