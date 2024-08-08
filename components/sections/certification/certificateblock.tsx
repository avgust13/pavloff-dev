import { FC } from "react";
import styled from "styled-components";

const CertificateBlockStyled = styled.div`
  height: 100px;
  padding: 0 15px 15px 0;
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NameStyled = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const IssuedDateStyled = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
  text-align: right;
`;

interface CertificateBlockProps {
  name: string;
  month: string;
  year: string;
}

const CertificateBlock: FC<CertificateBlockProps> = ({name, month, year}) => {
  return (
    <CertificateBlockStyled>
      <NameStyled>{name}</NameStyled>
      <IssuedDateStyled>Issued {month} {year}</IssuedDateStyled>
    </CertificateBlockStyled>
  );
}

export default CertificateBlock;