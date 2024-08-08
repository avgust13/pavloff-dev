import styled from "styled-components";

import Title from "@/components/sections/title";

import CertificateBlock from "./certificateblock";

const CertificationSectionStyled = styled.section`
  margin: 0 100px;
`;

const CertificationContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 50px;
`;

const CertificationSection = () => {
  return (
    <CertificationSectionStyled id="certification">
      <Title name="certification" />
      <CertificationContainerStyled>
        <CertificateBlock name="Deep Learning with Tensorflow" month="Apr" year="2024" />
        <CertificateBlock name="Deep Neural Networks with PyTorch" month="Apr" year="2024" />
        <CertificateBlock name="IBM AI Engineering Specialization" month="Apr" year="2024" />
        <CertificateBlock name="Introduction to Computer Vision and Image Processing" month="Mar" year="2024" />
        <CertificateBlock name="Deep Learning Essentials with Keras" month="Feb" year="2024" />
        <CertificateBlock name="Machine Learning with Python" month="Feb" year="2024" />
        <CertificateBlock name="MCSD: Web Applications" month="Apr" year="2014" />
        <CertificateBlock name="MCPS: Microsoft Certified Professional" month="Mar" year="2014" />
        <CertificateBlock name="MS: Programming in HTML5 with JavaScript and CSS3" month="Mar" year="2014" />
        <CertificateBlock name="MCPD: ASP.NET Developer 3.5" month="Mar" year="2010" />
        <CertificateBlock name="MCTS: .NET Framework 3.5, ASP.NET Applications" month="Dec" year="2009" />
      </CertificationContainerStyled>
    </CertificationSectionStyled>
  );
};

export default CertificationSection;
