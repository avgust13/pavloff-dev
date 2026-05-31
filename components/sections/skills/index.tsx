import styled from "styled-components";

import SectionHead from "@/components/sections/titlesection";
import { Wrap } from "@/components/sharedstyles";

const SectionStyled = styled.section`
  padding: 76px 0;
  background: ${({ theme }) => theme.colors.paper2};
`;

const StackGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ColumnStyled = styled.div`
  h4 {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.green};
    margin-bottom: 14px;
    letter-spacing: 0.04em;
  }

  h4::before {
    content: "# ";
  }
`;

const ChipsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;

  span {
    font-size: 12px;
    padding: 5px 10px;
    background: ${({ theme }) => theme.colors.card};
    border: 1px solid ${({ theme }) => theme.colors.line};
    border-radius: 5px;
  }
`;

const SkillsSection = () => {
  const stack: { key: string; chips: string[] }[] = [
    {
      key: "ai_stack",
      chips: [
        "Claude API",
        "OpenAI",
        "n8n",
        "LangChain",
        "TensorFlow",
        "PyTorch",
        "scikit-learn",
      ],
    },
    {
      key: "backend_infra",
      chips: [
        "Node.js",
        "Python",
        ".NET",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Docker",
        "Kubernetes",
        "GCP",
        "Azure",
      ],
    },
    {
      key: "frontend",
      chips: ["React", "TypeScript", "Next.js", "Angular"],
    },
    {
      key: "quality_ops",
      chips: ["Playwright", "Jest", "GitHub Actions", "GraphQL", "REST", "gRPC"],
    },
  ];

  return (
    <SectionStyled id="stack">
      <Wrap>
        <SectionHead
          title="The tools I actually reach for when shipping."
          idx="04 · stack"
        />
        <StackGridStyled>
          {stack.map((col) => (
            <ColumnStyled key={col.key}>
              <h4>{col.key}</h4>
              <ChipsStyled>
                {col.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </ChipsStyled>
            </ColumnStyled>
          ))}
        </StackGridStyled>
      </Wrap>
    </SectionStyled>
  );
};

export default SkillsSection;
