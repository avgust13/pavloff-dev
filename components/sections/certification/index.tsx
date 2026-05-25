import styled from "styled-components";

import Title from "@/components/sections/titlesection";

import CertificateBlock from "./certificateblock";

const CertificationSectionStyled = styled.section`
  max-width: 900px;
  width: 100%;
`;

const CertificationContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 50px;
`;

const CertificationSection = () => {
  return (
    <CertificationSectionStyled id="certifications">
      <Title name="certifications" />
      <CertificationContainerStyled>
        <CertificateBlock name="Building with the Claude API" month="May" year="2026" />
        <CertificateBlock name="AI Fluency Framework & Foundations" month="May" year="2026" />
        <CertificateBlock name="Claude Code in Action" month="Apr" year="2026" />
        <CertificateBlock name="Introduction to Claude Cowork" month="Apr" year="2026" />
        <CertificateBlock name="Claude Code 101" month="Apr" year="2026" />
        <CertificateBlock name="Claude 101" month="Apr" year="2026" />
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
