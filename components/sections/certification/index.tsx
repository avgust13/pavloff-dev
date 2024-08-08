import styled from "styled-components";

import Title from "@/components/sections/title";

const CertificationSectionStyled = styled.div`
  margin: 0 100px;
`;

const CertificationSection = () => {
  return (
    <CertificationSectionStyled>
      <Title name="certification" />
    </CertificationSectionStyled>
  );
}

export default CertificationSection;