import styled from "styled-components";

import Title from "@/components/sections/titlesection";

const AboutSectionStyled = styled.section`
  max-width: 900px;
  width: 100%;
`;

const AboutStyled = styled.p`
  margin: 0 200px 50px 100px;

  @media (max-width: 768px) {
    margin: 0 0 20px 0;
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionStyled id="about">
      <Title name="about" />
      <AboutStyled>
        Senior Full-Stack Software Developer with over 15 years of experience.
        Adept in software design, development, and team management. Proficient
        in diverse technologies and committed to delivering innovative solutions
        that meet client needs and drive business success.
      </AboutStyled>
    </AboutSectionStyled>
  );
};

export default AboutSection;
