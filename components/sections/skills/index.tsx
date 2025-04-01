import styled from "styled-components";
import Title from "@/components/sections/titlesection2";

import SkillIcon from "./SkillIcon";

const SkillsSectionStyled = styled.div`
  margin: 0 100px;
`;

const SkillCategoryGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px;
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
  font-size: 20px;
  font-weight: 600;
  padding-left: 10px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

const SkillsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding: 0 20px;
`;

const SkillsSection = () => {
  const skillsByCategory = {
    "Frontend Development": [
      { name: "SiReact", title: "React" },
      { name: "SiTypescript", title: "TypeScript" },
      { name: "SiAngular", title: "Angular" },
      { name: "SiVuedotjs", title: "Vue.js" },
    ],
    "Backend Development": [
      { name: "SiNodedotjs", title: "Node.js" },
      { name: "SiPython", title: "Python" },
      { name: "SiDotnet", title: ".NET" },
      { name: "SiGoland", title: "Golang" },
      { name: "SiCplusplus", title: "C++" },
      { name: "SiSolidity", title: "Solidity" },
    ],
    "AI & Machine Learning": [
      { name: "SiTensorflow", title: "TensorFlow" },
      { name: "SiPytorch", title: "PyTorch" },
      { name: "SiJupyter", title: "Jupyter" },
      { name: "SiKeras", title: "Keras" },
      { name: "SiScikitlearn", title: "scikit-learn" },
    ],
    "Databases & Storage": [
      { name: "SiPostgresql", title: "PostgreSQL" },
      { name: "SiMysql", title: "MySQL" },
      { name: "SiMongodb", title: "MongoDB" },
      { name: "SiRedis", title: "Redis" },
      { name: "SiFirebase", title: "Firebase" },
    ],
    "Cloud & DevOps": [
      { name: "SiGooglecloud", title: "GCP" },
      { name: "SiMicrosoftazure", title: "Azure" },
      { name: "SiKubernetes", title: "Kubernetes" },
      { name: "SiDocker", title: "Docker" },
      { name: "SiGit", title: "Git" },
      { name: "SiGithub", title: "GitHub" },
      { name: "SiGitlab", title: "GitLab" },
      { name: "SiLinux", title: "Linux" },
      { name: "SiJira", title: "Jira" },
    ],
    "API & Integration": [
      { name: "SiGraphql", title: "GraphQL" },
      { name: "SiRabbitmq", title: "RabbitMQ" },
      { name: "SiMqtt", title: "MQTT" },
      { name: "SiOpenapi", title: "REST API" },
      { name: "SiGrpc", title: "gRPC" },
    ],
    "Testing & Quality": [
      { name: "SiJest", title: "Jest" },
      { name: "SiSelenium", title: "Selenium" },
      { name: "SiPuppeteer", title: "Puppeteer" },
      { name: "SiPlaywright", title: "Playwright" },
      { name: "SiPostman", title: "Postman" },
    ],
    "Design & Collaboration": [
      { name: "SiFigma", title: "Figma" },
      { name: "SiAdobexd", title: "XD" },
      { name: "SiNotion", title: "Notion" },
      { name: "SiSlack", title: "Slack" },
      { name: "SiFfmpeg", title: "FFmpeg" },
    ],
  };

  return (
    <SkillsSectionStyled id="skills">
      <Title name="skills" />
      <SkillCategoryGridStyled>
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <CategoryCardStyled key={category}>
            <CategoryTitleStyled>{category}</CategoryTitleStyled>
            <SkillsContainerStyled>
              {skills.map((skill) => (
                <SkillIcon key={skill.name} name={skill.name} title={skill.title} />
              ))}
            </SkillsContainerStyled>
          </CategoryCardStyled>
        ))}
      </SkillCategoryGridStyled>
    </SkillsSectionStyled>
  );
};

export default SkillsSection;
