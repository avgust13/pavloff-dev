import styled from "styled-components";
import Title from "@/components/sections/titlesection";

import SkillIcon from "./SkillIcon";

const SkillsSectionStyled = styled.section`
  max-width: 900px;
  width: 100%;
`;

const SubheadingStyled = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0 0 30px 0;
`;

const SkillCategoryGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 60px;
`;

const CategoryCardStyled = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const CategoryTitleStyled = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  padding-left: 10px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

const SkillsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 0 10px;
`;

const SkillsSection = () => {
  const skillsByCategory = {
    "AI Stack": [
      { name: "Anthropic", title: "Claude API" },
      { name: "Openai", title: "OpenAI" },
      { name: "N8N", title: "n8n" },
      { name: "Langchain", title: "LangChain" },
      { name: "Tensorflow", title: "TensorFlow" },
      { name: "Pytorch", title: "PyTorch" },
      { name: "Scikitlearn", title: "scikit-learn" },
    ],
    "Backend & Infra": [
      { name: "Nodedotjs", title: "Node.js" },
      { name: "Python", title: "Python" },
      { name: "Dotnet", title: ".NET" },
      { name: "Postgresql", title: "PostgreSQL" },
      { name: "Mongodb", title: "MongoDB" },
      { name: "Redis", title: "Redis" },
      { name: "Docker", title: "Docker" },
      { name: "Kubernetes", title: "Kubernetes" },
      { name: "Googlecloud", title: "GCP" },
      { name: "Microsoftazure", title: "Azure" },
    ],
    Frontend: [
      { name: "React", title: "React" },
      { name: "Typescript", title: "TypeScript" },
      { name: "Nextdotjs", title: "Next.js" },
      { name: "Angular", title: "Angular" },
    ],
    "Quality & Ops": [
      { name: "Playwright", title: "Playwright" },
      { name: "Jest", title: "Jest" },
      { name: "Githubactions", title: "GitHub Actions" },
      { name: "Graphql", title: "GraphQL" },
      { name: "Openapi", title: "REST" },
      { name: "Grpc", title: "gRPC" },
    ],
  };

  return (
    <SkillsSectionStyled id="skills">
      <Title name="stack" />
      <SubheadingStyled>
        The stack I work with daily. Not a CV checklist — these are the tools I
        actually reach for when shipping.
      </SubheadingStyled>
      <SkillCategoryGridStyled>
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <CategoryCardStyled key={category}>
            <CategoryTitleStyled>{category}</CategoryTitleStyled>
            <SkillsContainerStyled>
              {skills.map((skill) => (
                <SkillIcon
                  key={skill.name}
                  name={skill.name}
                  title={skill.title}
                />
              ))}
            </SkillsContainerStyled>
          </CategoryCardStyled>
        ))}
      </SkillCategoryGridStyled>
    </SkillsSectionStyled>
  );
};

export default SkillsSection;
