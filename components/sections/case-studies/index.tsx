import styled from "styled-components";

import SectionHead from "@/components/sections/titlesection";
import { Wrap } from "@/components/sharedstyles";

const SectionStyled = styled.section`
  padding: 76px 0;
`;

const CaseStyled = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.card};
  margin-bottom: 18px;
  overflow: hidden;
`;

const CaseBarStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  background: ${({ theme }) => theme.colors.paper2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  flex-wrap: wrap;
`;

const FileNameStyled = styled.span`
  font-size: 13px;
  font-weight: 600;

  &::before {
    content: "● ";
    color: ${({ theme }) => theme.colors.green};
    font-size: 10px;
    vertical-align: middle;
  }
`;

const TagsStyled = styled.div`
  display: flex;
  gap: 6px;
  margin-left: auto;
  flex-wrap: wrap;
`;

const TagStyled = styled.span`
  font-size: 10.5px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.inkSoft};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 4px;
  padding: 3px 8px;
`;

const CaseBodyStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 26px 24px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const BlockStyled = styled.div`
  .tag {
    font-size: 11px;
    color: ${({ theme }) => theme.colors.green};
    display: block;
    margin-bottom: 8px;
  }

  p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.inkSoft};
  }
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

type CaseStudy = {
  id: number;
  file: string;
  tags: string[];
  problem: string;
  solution: string;
  result: string;
};

const CaseStudiesSection = () => {
  const cases: CaseStudy[] = [
    {
      id: 1,
      file: "compatibot.case",
      tags: ["agentic-ai", "openai-agents-sdk", "sole-owner"],
      problem:
        "The founder needed an AI assistant that could reason about complex product compatibility — not just keyword-match — and guide buyers to the right combination, with no in-house engineering team to build it.",
      solution:
        "Designed and deployed an agentic workflow on OpenAI's Agents SDK with multi-step reasoning and dynamic product suggestions, on a modular stack (React, Node.js, Python, PostgreSQL, MongoDB, Strapi CMS, Redis, n8n). I owned architecture, CI/CD, and cloud deployment as the sole technical owner.",
      result:
        "Took the product from zero to a working agentic recommendation engine, then ran it as sole technical owner for a year of iteration. n8n pipelines kept the catalog in sync with no manual data entry.",
    },
    {
      id: 2,
      file: "imly-ai.case",
      tags: ["ai-mvp", "non-technical-founder", "chrome-extension"],
      problem:
        "A non-technical founder had an idea for an AI writing assistant but no engineering team — and a narrow window to get a real product in front of users.",
      solution:
        "Built the full product solo: a React extension, Node.js backend, and PostgreSQL + Redis data layer, with OpenAI APIs powering rewriting, translation, spell-check, OCR, and smart replies. CI/CD and observability from day one.",
      result:
        "Shipped a production AI Chrome extension in under five months as the only engineer. Five AI features in one tool, deployed with logging and monitoring so the founder could onboard users without firefighting.",
    },
    {
      id: 3,
      file: "voltbox24.case",
      tags: ["e-commerce", "solo-build", "2-month-launch"],
      problem:
        "A retailer needed a full EU-facing online store — catalog, checkout, payments, multi-language — live within a two-month window, with no in-house engineering.",
      solution:
        "Designed and shipped voltbox24.eu end-to-end, solo: a React storefront and admin on a Node.js backend, with payments, order management, multi-language, plus CI/CD, hosting, monitoring, and SEO foundations.",
      result:
        "Launched EU-wide inside the two-month window as the sole engineer — from requirements through deployment and post-launch support. Browsing, search, and checkout tuned for speed across the EU.",
    },
  ];

  return (
    <SectionStyled id="work">
      <Wrap>
        <SectionHead
          title="Real products I architected and shipped — most as sole engineer."
          idx="03 · recent_work"
        />
        {cases.map((c) => (
          <CaseStyled key={c.id}>
            <CaseBarStyled>
              <FileNameStyled>{c.file}</FileNameStyled>
              <TagsStyled>
                {c.tags.map((tag) => (
                  <TagStyled key={tag}>{tag}</TagStyled>
                ))}
              </TagsStyled>
            </CaseBarStyled>
            <CaseBodyStyled>
              <BlockStyled>
                <span className="tag">problem</span>
                <p>{c.problem}</p>
              </BlockStyled>
              <BlockStyled>
                <span className="tag">solution</span>
                <p>{c.solution}</p>
              </BlockStyled>
              <BlockStyled>
                <span className="tag">result</span>
                <p>{c.result}</p>
              </BlockStyled>
            </CaseBodyStyled>
          </CaseStyled>
        ))}
        <FootNoteStyled>
          Want the detail? I&apos;ll walk you through the architecture, the
          trade-offs, and what I&apos;d do differently — on our call.
        </FootNoteStyled>
      </Wrap>
    </SectionStyled>
  );
};

export default CaseStudiesSection;
