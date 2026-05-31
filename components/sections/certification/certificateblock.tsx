import type { FC } from "react";
import styled from "styled-components";

const CertStyled = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 8px;
  padding: 20px 22px;
`;

const TagStyled = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.green};
  display: block;
  margin-bottom: 8px;
`;

const NameStyled = styled.h4`
  font-family: var(--font-grotesk), sans-serif;
  font-weight: 600;
  font-size: 15.5px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0;
`;

const DateStyled = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin-top: 6px;
`;

interface CertificateBlockProps {
  name: string;
  month: string;
  year: string;
  issuer?: string;
}

const CertificateBlock: FC<CertificateBlockProps> = ({
  name,
  month,
  year,
  issuer,
}) => {
  return (
    <CertStyled>
      {issuer && <TagStyled>{issuer}</TagStyled>}
      <NameStyled>{name}</NameStyled>
      <DateStyled>
        {issuer ? "issued " : ""}
        {month.toLowerCase()} {year}
      </DateStyled>
    </CertStyled>
  );
};

export default CertificateBlock;
