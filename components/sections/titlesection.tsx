import type { FC } from "react";
import styled from "styled-components";

const SecHeadStyled = styled.div`
  margin-bottom: 46px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  padding-bottom: 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  flex-wrap: wrap;
`;

const HeadingStyled = styled.h2`
  font-family: var(--font-grotesk), sans-serif;
  font-weight: 600;
  font-size: clamp(24px, 3vw, 34px);
  letter-spacing: -0.02em;
  line-height: 1.15;
  max-width: 24ch;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0;
`;

const IndexStyled = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.green};
  white-space: nowrap;
`;

interface SectionHeadProps {
  title: string;
  idx: string;
}

const SectionHead: FC<SectionHeadProps> = ({ title, idx }) => {
  return (
    <SecHeadStyled>
      <HeadingStyled>{title}</HeadingStyled>
      <IndexStyled>{idx}</IndexStyled>
    </SecHeadStyled>
  );
};

export default SectionHead;
