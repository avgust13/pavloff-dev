import styled from "styled-components";

import Title from "@/components/sections/title";

const AboutStyled = styled.p`
  margin: 0 200px 50px 100px;
`;

const AboutSectionStyled = styled.div`
  margin: 0 100px;
`;

const AboutSection = () => {
  return (
    <AboutSectionStyled>
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
