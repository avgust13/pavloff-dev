import type { FC } from "react";
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

const TitleStyled = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 46px;
  margin: 0 0 30px 0;

  @media (max-width: 768px) {
    font-size: 36px;
    margin: 0;
  }
`;

interface TitleSectionProps {
  name: string;
}

const TitleSection: FC<TitleSectionProps> = ({ name }) => {
  return (
    <TitleSectionStyled>
      <TitleStyled>{name}</TitleStyled>
    </TitleSectionStyled>
  );
}

export default TitleSection;