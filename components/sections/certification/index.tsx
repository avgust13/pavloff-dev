import styled from "styled-components";

import SectionHead from "@/components/sections/titlesection";
import { Wrap } from "@/components/sharedstyles";

import CertificateBlock from "./certificateblock";

const SectionStyled = styled.section`
  padding: 76px 0;
`;

const CertsGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const MoreCertsStyled = styled.details`
  margin-top: 18px;

  summary {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.green};
    font-size: 12.5px;
    letter-spacing: 0.04em;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::before {
    content: "$ ";
  }
`;

const OlderGridStyled = styled(CertsGridStyled)`
  margin-top: 16px;
`;

type Certificate = {
  name: string;
  month: string;
  year: string;
  issuer?: string;
};

const CertificationSection = () => {
  const recent: Certificate[] = [
    { name: "Building with the Claude API", month: "May", year: "2026", issuer: "anthropic" },
    { name: "AI Fluency Framework & Foundations", month: "May", year: "2026", issuer: "anthropic" },
    { name: "Claude Code in Action", month: "Apr", year: "2026", issuer: "anthropic" },
    { name: "Introduction to Claude Cowork", month: "Apr", year: "2026", issuer: "anthropic" },
    { name: "IBM AI Engineering Specialization", month: "Apr", year: "2024", issuer: "ibm" },
    { name: "Deep Learning with TensorFlow", month: "Apr", year: "2024", issuer: "ibm" },
  ];

  const older: Certificate[] = [
    { name: "Claude Code 101", month: "Apr", year: "2026" },
    { name: "Claude 101", month: "Apr", year: "2026" },
    { name: "Deep Neural Networks with PyTorch", month: "Apr", year: "2024" },
    { name: "Introduction to Computer Vision and Image Processing", month: "Mar", year: "2024" },
    { name: "Deep Learning Essentials with Keras", month: "Feb", year: "2024" },
    { name: "Machine Learning with Python", month: "Feb", year: "2024" },
    { name: "MCSD: Web Applications", month: "Apr", year: "2014" },
    { name: "MCPS: Microsoft Certified Professional", month: "Mar", year: "2014" },
    { name: "MS: Programming in HTML5 with JavaScript and CSS3", month: "Mar", year: "2014" },
    { name: "MCPD: ASP.NET Developer 3.5", month: "Mar", year: "2010" },
    { name: "MCTS: .NET Framework 3.5, ASP.NET Applications", month: "Dec", year: "2009" },
  ];

  return (
    <SectionStyled id="certs">
      <Wrap>
        <SectionHead title="My six most recent — all AI-focused." idx="05 · certifications" />
        <CertsGridStyled>
          {recent.map((cert) => (
            <CertificateBlock
              key={`${cert.name}-${cert.year}`}
              name={cert.name}
              month={cert.month}
              year={cert.year}
              issuer={cert.issuer}
            />
          ))}
        </CertsGridStyled>
        <MoreCertsStyled>
          <summary>show {older.length} earlier certifications</summary>
          <OlderGridStyled as="div">
            {older.map((cert) => (
              <CertificateBlock
                key={`${cert.name}-${cert.year}`}
                name={cert.name}
                month={cert.month}
                year={cert.year}
              />
            ))}
          </OlderGridStyled>
        </MoreCertsStyled>
      </Wrap>
    </SectionStyled>
  );
};

export default CertificationSection;
