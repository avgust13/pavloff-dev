import styled from "styled-components";

import Title from "@/components/sections/titlesection";

const AboutSectionStyled = styled.section`
  max-width: 900px;
  width: 100%;
`;

const SubheadingStyled = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0 100px 30px 100px;

  @media (max-width: 768px) {
    margin: 0 0 24px 0;
    font-size: 16px;
  }
`;

const TilesGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 0 100px 30px 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 0 24px 0;
    gap: 16px;
  }
`;

const TileStyled = styled.div`
  background-color: #f5f5f514;
  border-radius: 8px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TileHeadingStyled = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
`;

const TileBodyStyled = styled.p`
  font-size: 14px;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
`;

const BreadthLineStyled = styled.p`
  margin: 0 100px;
  font-size: 13px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.tertiary};
  opacity: 0.75;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const AboutSection = () => {
  const tiles = [
    {
      heading: "I've shipped, not just studied AI.",
      body: "15 years building production systems before AI became hype. I know what breaks at scale, what investors look for in the codebase, and what a $20/mo OpenAI bill becomes at 10,000 users.",
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
    <AboutSectionStyled id="about">
      <Title name="why me" />
      <SubheadingStyled>
        Why founders hire me instead of an agency or a junior team.
      </SubheadingStyled>
      <TilesGridStyled>
        {tiles.map((tile) => (
          <TileStyled key={tile.heading}>
            <TileHeadingStyled>{tile.heading}</TileHeadingStyled>
            <TileBodyStyled>{tile.body}</TileBodyStyled>
          </TileStyled>
        ))}
      </TilesGridStyled>
      <BreadthLineStyled>
        Background also includes algorithmic trading systems, computer vision
        pipelines, and blockchain dApps. If that&apos;s what you need, ask.
      </BreadthLineStyled>
    </AboutSectionStyled>
  );
};

export default AboutSection;
