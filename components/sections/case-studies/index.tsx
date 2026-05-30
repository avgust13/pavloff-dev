import styled from "styled-components";

import Title from "@/components/sections/titlesection";

const CaseStudiesSectionStyled = styled.section`
  max-width: 900px;
  width: 100%;
`;

const SubheadingStyled = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0 0 30px 0;
`;

const CasesGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;
  margin-bottom: 40px;
`;

const CaseCardStyled = styled.article`
  background-color: #f5f5f514;
  border-radius: 10px;
  padding: 26px 28px;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
`;

const CaseHeaderStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 16px;
`;

const CaseTitleStyled = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
`;

const TagsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const TagStyled = styled.span`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.primary};
  background-color: rgba(166, 187, 204, 0.12);
  padding: 4px 10px;
  border-radius: 999px;
`;

const RowStyled = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 12px;
  padding: 10px 0;
  border-top: 1px solid rgba(166, 187, 204, 0.15);
  font-size: 14px;
  line-height: 1.55;

  &:first-of-type {
    border-top: none;
    padding-top: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

const LabelStyled = styled.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 2px;
`;

const BodyStyled = styled.div`
  color: ${({ theme }) => theme.colors.tertiary};

  strong {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
  }
`;

const ReferencesNoteStyled = styled.p`
  font-size: 13px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.tertiary};
  opacity: 0.75;
  text-align: center;
  margin: 0 0 40px 0;
`;

type CaseStudy = {
  id: number;
  title: string;
  tags: string[];
  problem: string;
  solution: string;
  result: string;
};

const CaseStudiesSection = () => {
  const cases: CaseStudy[] = [
    {
      id: 1,
      title: "Compatibot — Agentic Product-Recommendation Platform",
      tags: ["Agentic AI", "OpenAI Agents SDK", "Sole technical owner"],
      problem:
        "The founder needed an AI assistant that could reason about complex product compatibility — not just keyword-match — and guide buyers to the right combination, with no in-house engineering team to build it.",
      solution:
        "Designed and deployed an agentic workflow on OpenAI's Agents SDK with multi-step reasoning and dynamic product suggestions, on a modular stack (React, Node.js, Python, PostgreSQL, MongoDB, Strapi CMS, Redis, n8n). I owned everything — architecture, CI/CD, and cloud deployment — as the sole technical owner.",
      result:
        "Took the product from zero to a working agentic recommendation engine, then ran it as sole technical owner for a year of iteration. The assistant resolved multi-step compatibility questions that previously needed a human expert, and n8n pipelines kept the catalog in sync with no manual data entry.",
    },
    {
      id: 2,
      title: "IMly.ai — AI Writing Assistant (Chrome Extension)",
      tags: ["AI MVP", "Non-technical founder", "Chrome extension"],
      problem:
        "A non-technical founder had an idea for an AI writing assistant but no engineering team — and a narrow window to get a real product in front of users.",
      solution:
        "Built the full product from scratch, solo: a React extension, Node.js backend, and PostgreSQL + Redis data layer, with OpenAI APIs powering rewriting, translation, spell-check, OCR, and smart replies. Set up CI/CD and observability so it could scale from day one.",
      result:
        "Shipped a production AI Chrome extension in under five months as the only engineer, working directly with the founder. Five AI features in one tool, deployed with logging and monitoring so the founder could onboard users without firefighting.",
    },
    {
      id: 3,
      title: "Voltbox24 — EU E-commerce Storefront",
      tags: ["E-commerce", "Solo build", "2-month launch"],
      problem:
        "A retailer needed a full EU-facing online store — catalog, checkout, payments, multi-language — live within a two-month window, with no in-house engineering.",
      solution:
        "Designed and shipped voltbox24.eu end-to-end, solo: a React storefront and admin on a Node.js backend, with payments, order management, and multi-language support, plus CI/CD, hosting, monitoring, and SEO foundations.",
      result:
        "Launched EU-wide inside the two-month window as the sole engineer — from requirements and architecture through deployment and post-launch support. Catalog browsing, search, and checkout tuned for speed across the EU.",
    },
  ];

  return (
    <CaseStudiesSectionStyled id="case-studies">
      <Title name="recent work" />
      <SubheadingStyled>
        Real products I architected and shipped — most as the sole engineer or
        technical lead.
      </SubheadingStyled>
      <CasesGridStyled>
        {cases.map((c) => (
          <CaseCardStyled key={c.id}>
            <CaseHeaderStyled>
              <CaseTitleStyled>{c.title}</CaseTitleStyled>
              <TagsStyled>
                {c.tags.map((tag) => (
                  <TagStyled key={tag}>{tag}</TagStyled>
                ))}
              </TagsStyled>
            </CaseHeaderStyled>
            <RowStyled>
              <LabelStyled>Problem</LabelStyled>
              <BodyStyled>{c.problem}</BodyStyled>
            </RowStyled>
            <RowStyled>
              <LabelStyled>Solution</LabelStyled>
              <BodyStyled>{c.solution}</BodyStyled>
            </RowStyled>
            <RowStyled>
              <LabelStyled>Result</LabelStyled>
              <BodyStyled>{c.result}</BodyStyled>
            </RowStyled>
          </CaseCardStyled>
        ))}
      </CasesGridStyled>
      <ReferencesNoteStyled>
        Want the detail? I&apos;ll walk you through the architecture, the
        trade-offs, and what I&apos;d do differently — on our call.
      </ReferencesNoteStyled>
    </CaseStudiesSectionStyled>
  );
};

export default CaseStudiesSection;
