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
  ] as const;

  return (
    <SkillsSectionStyled id="services">
      <Title name="services" />
      <ServicesContainerStyled>
        {skills.map((skill) => (
          <SkillIcon key={skill.name} name={skill.name} title={skill.title} />
        ))}
      </ServicesContainerStyled>
    </SkillsSectionStyled>
  );
};

export default SkillsSection;
