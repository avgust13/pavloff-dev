import { Fragment, type ReactNode } from "react";
import styled from "styled-components";

import { Wrap, Btn } from "@/components/sharedstyles";

const BOOKING_URL = "https://calendar.app.google/q7FtHB7b8GAqKkQA6";

const HeroStyled = styled.section`
  padding: 64px 0 56px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`;

const HeroGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.8fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

const MetaLineStyled = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin-bottom: 28px;

  span {
    display: flex;
    gap: 7px;
    align-items: center;
  }
`;

const DotStyled = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.green};
`;

const HeadlineStyled = styled.h1`
  font-family: var(--font-grotesk), sans-serif;
  font-weight: 600;
  font-size: clamp(34px, 4.8vw, 60px);
  line-height: 1.04;
  letter-spacing: -0.02em;
  text-wrap: balance;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.green};
  }
`;

const SubStyled = styled.p`
  margin-top: 24px;
  font-size: 15.5px;
  color: ${({ theme }) => theme.colors.inkSoft};
  max-width: 54ch;

  b {
    color: ${({ theme }) => theme.colors.ink};
    font-weight: 600;
  }
`;

const CtaRowStyled = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const NoteStyled = styled.p`
  margin-top: 34px;
  font-size: 13.5px;
  color: ${({ theme }) => theme.colors.inkSoft};
  max-width: 64ch;
  padding-left: 16px;
  border-left: 2px solid ${({ theme }) => theme.colors.green};
`;

const TermStyled = styled.div`
  background: ${({ theme }) => theme.colors.ink};
  border: 1px solid ${({ theme }) => theme.colors.ink};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 24px 50px -28px rgba(0, 0, 0, 0.5);
`;

const TermBarStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 11px 14px;
  background: #262620;
  border-bottom: 1px solid #34342c;

  i {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    display: block;
  }

  i.r {
    background: #e06a52;
  }
  i.y {
    background: #e0b152;
  }
  i.g {
    background: #7bc06a;
  }

  .ttl {
    margin-left: 8px;
    font-size: 11px;
    color: #8d8b7f;
  }
`;

const TermBodyStyled = styled.pre`
  margin: 0;
  padding: 18px 18px 22px;
  font-family: var(--font-mono), monospace;
  font-size: 13px;
  line-height: 1.85;
  color: #d8d6c8;
  white-space: pre;
  overflow-x: auto;
`;

const Cm = styled.span`
  color: #6f6d61;
`;
const Prompt = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-weight: 600;
`;
const Out = styled.span`
  color: #a9a799;
`;
const CKey = styled.span`
  color: #7fb3e0;
`;
const CStr = styled.span`
  color: #9bce86;
`;
const CNum = styled.span`
  color: #e0b152;
`;
const Ok = styled.span`
  color: #9bce86;
`;

type EngageRow = {
  key: string;
  body: ReactNode;
};

const HeroSection = () => {
  const rows: EngageRow[] = [
    {
      key: "fractional_cto",
      body: (
        <>
          {"{ rate: "}
          <CStr>&quot;$3–8K/mo&quot;</CStr>
          {", min: "}
          <CNum>3</CNum>
          {" }"}
        </>
      ),
    },
    {
      key: "ai_mvp",
      body: (
        <>
          {"{ price: "}
          <CStr>&quot;$15–45K&quot;</CStr>
          {", weeks: "}
          <CNum>8–12</CNum>
          {" }"}
        </>
      ),
    },
    {
      key: "automation",
      body: (
        <>
          {"{ price: "}
          <CStr>&quot;$5–20K&quot;</CStr>
          {", weeks: "}
          <CNum>2–6</CNum>
          {" }"}
        </>
      ),
    },
    {
      key: "audit",
      body: (
        <>
          {"{ price: "}
          <CStr>&quot;$2.5K&quot;</CStr>
          {", days: "}
          <CNum>5</CNum>
          {" }"}
        </>
      ),
    },
  ];

  const keyWidth = Math.max(...rows.map((r) => r.key.length));

  return (
    <HeroStyled id="top">
      <Wrap>
        <HeroGridStyled>
          <div>
            <MetaLineStyled>
              <span>
                <DotStyled />
                ros pavloff · senior ai engineer
              </span>
              <span>20+ yrs in prod</span>
              <span>anthropic-certified</span>
            </MetaLineStyled>
            <HeadlineStyled>
              Ship your AI product — or hire the senior engineer to{" "}
              <em>lead the team</em> that will.
            </HeadlineStyled>
            <SubStyled>
              Two ways to work: as your <b>Fractional AI CTO</b> ($3–8K/mo,
              hands-on technical leadership) or by{" "}
              <b>building your AI MVP in 90 days</b>. 20+ years shipping
              production software. Certified on Claude APIs and agentic
              workflows.
            </SubStyled>
            <CtaRowStyled>
              <Btn href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                book 30-min-call
              </Btn>
              <Btn as="a" href="#services" $ghost>
                see how I work →
              </Btn>
            </CtaRowStyled>
            <NoteStyled>
              No pitch deck. We&apos;ll map your idea or your current product in
              30 minutes, and you&apos;ll leave with at least one concrete next
              step — whether or not we work together.
            </NoteStyled>
          </div>

          <TermStyled>
            <TermBarStyled>
              <i className="r" />
              <i className="y" />
              <i className="g" />
              <span className="ttl">ros@pavloff: ~/engagements</span>
            </TermBarStyled>
            <TermBodyStyled>
              <Cm># pick how we work together</Cm>
              {"\n"}
              <Prompt>$</Prompt> pavloff --engage{"\n"}
              {rows.map((r) => (
                <Fragment key={r.key}>
                  <Out>›</Out> <CKey>{r.key}</CKey>
                  {":" + " ".repeat(keyWidth - r.key.length + 1)}
                  {r.body}
                  {"\n"}
                </Fragment>
              ))}
              {"\n"}
              <Prompt>$</Prompt> next_step --book{"\n"}
              <Ok>✓ 30-min discovery call — no pitch deck required</Ok>
            </TermBodyStyled>
          </TermStyled>
        </HeroGridStyled>
      </Wrap>
    </HeroStyled>
  );
};

export default HeroSection;
