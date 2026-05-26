import styled from "styled-components";

import Title from "@/components/sections/titlesection";

import CertificateBlock from "./certificateblock";

const CertificationSectionStyled = styled.section`
  max-width: 900px;
  width: 100%;
`;

const SubheadingStyled = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0 0 30px 0;
`;

const CertificationContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 50px;
`;

const ShowAllToggleStyled = styled.details`
  margin-top: 36px;

  summary {
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    list-style: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    transition: background-color 0.2s ease;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: "▾";
    font-size: 12px;
    transition: transform 0.2s ease;
  }

  &[open] summary::after {
    transform: rotate(180deg);
  }

  summary:hover {
    background-color: rgba(166, 187, 204, 0.1);
  }
`;

const OlderGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 50px;
  margin-top: 30px;
`;

type Certificate = {
  name: string;
  month: string;
  year: string;
};

const CertificationSection = () => {
  const recent: Certificate[] = [
    { name: "Building with the Claude API", month: "May", year: "2026" },
    { name: "AI Fluency Framework & Foundations", month: "May", year: "2026" },
    { name: "Claude Code in Action", month: "Apr", year: "2026" },
    { name: "Introduction to Claude Cowork", month: "Apr", year: "2026" },
    { name: "IBM AI Engineering Specialization", month: "Apr", year: "2024" },
    { name: "Deep Learning with TensorFlow", month: "Apr", year: "2024" },
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
    <CertificationSectionStyled id="certifications">
      <Title name="certifications" />
      <SubheadingStyled>
        My six most recent — all AI-focused. Anthropic-issued certifications on
        Claude APIs, agentic workflows, and Claude Code, plus an IBM AI
        Engineering specialization.
      </SubheadingStyled>
      <CertificationContainerStyled>
        {recent.map((cert) => (
          <CertificateBlock
            key={`${cert.name}-${cert.year}`}
            name={cert.name}
            month={cert.month}
            year={cert.year}
          />
        ))}
      </CertificationContainerStyled>
      <ShowAllToggleStyled>
        <summary>Show {older.length} earlier certifications</summary>
        <OlderGridStyled>
          {older.map((cert) => (
            <CertificateBlock
              key={`${cert.name}-${cert.year}`}
              name={cert.name}
              month={cert.month}
              year={cert.year}
            />
          ))}
        </OlderGridStyled>
      </ShowAllToggleStyled>
    </CertificationSectionStyled>
  );
};

export default CertificationSection;
