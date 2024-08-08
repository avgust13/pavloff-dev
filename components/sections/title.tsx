import { FC } from "react";
import styled from "styled-components";

const TitleSectionStyled = styled.div`
    display: flex;
    align-items: center;

  &::after{
    content: '';
    flex: 1;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary}; 
    margin-top: -25px;
    margin-left: 40px;
  }
`;

interface TitleSectionProps {
  name: string;
}

const TitleSection: FC<TitleSectionProps> = ({ name }) => {
  return (
    <TitleSectionStyled>
      <h1>{name}</h1>
    </TitleSectionStyled>
  );
}

export default TitleSection;