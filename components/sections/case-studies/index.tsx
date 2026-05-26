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
      title: "AI-Powered Document Intelligence",
      tags: ["LegalTech", "Series A", "US"],
      problem:
        "Team manually reviewed 800+ legal documents/month, capping growth. A previous GPT-3.5 attempt hallucinated case citations.",
      solution:
        "Claude-based RAG pipeline with citation verification, hybrid search (PGVector + BM25), and human-in-the-loop QA for low-confidence outputs.",
      result:
        "92% review-time reduction. False citation rate dropped from 14% to under 0.5%. Roughly $18K/month saved in paralegal hours. Now serving 6× document volume with the same headcount.",
    },
    {
      id: 2,
      title: "AI MVP for B2B Sales Intelligence",
      tags: ["SaaS", "Pre-seed", "EU"],
      problem:
        "Non-technical founder with a 12-week deadline to demo to a strategic partner. No engineering team.",
      solution:
        "Claude + n8n agentic stack scraping public signals, scoring accounts, and drafting outreach. Deployed on Vercel + Supabase so the founder operates it solo.",
      result:
        "Shipped on week 10. Demo closed a $45K LOI. Founder used the working product to raise pre-seed two months later.",
    },
    {
      id: 3,
      title: "Trading Signal Execution Engine",
      tags: ["Algorithmic Trading", "Growth-stage", "US"],
      problem:
        "Quants wrote logic in notebooks; nothing ran reliably in production. 30% of signals were missed in live markets.",
      solution:
        "Event-driven Python execution engine with strict latency budgets, structured logging, and a backtesting/paper-trading parity harness.",
      result:
        "Sub-100ms signal-to-execution latency. Missed signals dropped to under 2%. Team now ships new strategies in days, not months.",
    },
  ];

  return (
    <CaseStudiesSectionStyled id="case-studies">
      <Title name="recent work" />
      <SubheadingStyled>
        Anonymized to respect NDAs. References available after our second call.
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
        Names withheld by request. Happy to connect you with a reference once we
        agree it&apos;s a serious fit.
      </ReferencesNoteStyled>
    </CaseStudiesSectionStyled>
  );
};

export default CaseStudiesSection;
