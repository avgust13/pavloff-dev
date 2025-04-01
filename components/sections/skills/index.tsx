import styled from "styled-components";

import Title from "@/components/sections/title";

import SkillIcon from "./SkillIcon";

const SkillsSectionStyled = styled.div`
  margin: 0 100px;
`;

const ServicesContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
`;

const SkillsSection = () => {
  const skills = [
    { name: "SiReact", title: "React" },
    { name: "SiPython", title: "Python" },
    { name: "SiDotnet", title: ".NET" },
    { name: "SiTypescript", title: "TypeScript" },
    { name: "SiGoland", title: "Golang" },
    { name: "SiNodedotjs", title: "Node.js" },
    { name: "SiTensorflow", title: "TensorFlow" },
    { name: "SiPytorch", title: "PyTorch" },
    { name: "SiKubernetes", title: "Kubernetes" },
    { name: "SiDocker", title: "Docker" },
    { name: "SiPostgresql", title: "PostgreSQL" },
    { name: "SiMysql", title: "MySQL" },
    { name: "SiMongodb", title: "MongoDB" },
    { name: "SiRedis", title: "Redis" },
    { name: "SiGraphql", title: "GraphQL" },
    { name: "SiFirebase", title: "Firebase" },
    { name: "SiAmazonaws", title: "AWS" },
    { name: "SiMicrosoftazure", title: "Azure" },
    { name: "SiGooglecloud", title: "GCP" },
    { name: "SiJupyter", title: "Jupyter" },
    { name: "SiVisualstudiocode", title: "VS Code" },
    { name: "SiLinux", title: "Linux" },
    { name: "SiGit", title: "Git" },
    { name: "SiGithub", title: "GitHub" },
    { name: "SiGitlab", title: "GitLab" },
    { name: "SiJira", title: "Jira" },
    { name: "SiSlack", title: "Slack" },
    { name: "SiFigma", title: "Figma" },
    { name: "SiNotion", title: "Notion" },
    { name: "SiAdobexd", title: "XD" },
    { name: "SiFfmpeg", title: "FFmpeg" },
    { name: "SiPostman", title: "Postman" },
    { name: "SiJest", title: "Jest" },
    { name: "SiSelenium", title: "Selenium" },
    { name: "SiPuppeteer", title: "Puppeteer" },
    { name: "SiPlaywright", title: "Playwright" },
    { name: "SiRabbitmq", title: "RabbitMQ" },
    { name: "SiNats", title: "NATS" },
    { name: "SiMqtt", title: "MQTT" },
    { name: "SiAmazonmq", title: "Amazon MQ" },
    { name: "SiActivemq", title: "ActiveMQ" },
    { name: "SiAngular", title: "Angular" },
    { name: "SiVuedotjs", title: "Vue.js" },
  ] as const;

  return (
    <SkillsSectionStyled id="skills">
      <Title name="skills" />
      <ServicesContainerStyled>
        {skills.map((skill) => (
          <SkillIcon key={skill.name} name={skill.name} title={skill.title} />
        ))}
      </ServicesContainerStyled>
    </SkillsSectionStyled>
  );
};

export default SkillsSection;
