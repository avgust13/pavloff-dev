import styled from "styled-components";
import Link from "next/link";

import Title from "@/components/sections/title";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 800px;
  margin-top: 3rem;
`;

const Card = styled.div`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition:
    color 0.15s ease,
    border-color 0.15s ease;
  width: 100%;

  &:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const StyledLink = styled(Link)`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const ExperienceSectionStyled = styled.div`
  margin: 0 100px;
  /* margin: 0 0 1rem 0;
  font-size: 1.5rem; */
`;

const ExperienceSection = () => {
  return (
    <ExperienceSectionStyled>
      <Title name="experience" />
    </ExperienceSectionStyled>
  );
}

export default ExperienceSection;