import styled from "styled-components";

import { Wrap, Blink } from "@/components/sharedstyles";

const FooterStyled = styled.footer`
  padding: 56px 0 48px;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
`;

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 30px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const AboutStyled = styled.div`
  p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.inkSoft};
    max-width: 46ch;
    margin-bottom: 10px;
  }
`;

const BrandStyled = styled.a`
  font-weight: 700;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 16px;
`;

const ColumnStyled = styled.div`
  h5 {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.green};
    margin-bottom: 14px;
  }

  a {
    display: block;
    font-size: 13px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.inkSoft};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

const BottomStyled = styled.div`
  margin-top: 42px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.inkSoft};
  flex-wrap: wrap;
  gap: 8px;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Wrap>
        <GridStyled>
          <AboutStyled>
            <BrandStyled href="#top">
              pavloff.dev
              <Blink />
            </BrandStyled>
            <p>
              Senior AI Engineer working with founders across US, UK, and EU.
              Based in Europe, working remotely worldwide.
            </p>
            <p>
              20+ years shipping production software. Anthropic-certified on
              Claude APIs and Claude Code (May 2026).
            </p>
          </AboutStyled>
          <ColumnStyled>
            <h5>services</h5>
            <a href="#services">Fractional AI CTO</a>
            <a href="#services">AI MVP (90 days)</a>
            <a href="#services">AI Automation</a>
            <a href="#services">Architecture Audit</a>
          </ColumnStyled>
          <ColumnStyled>
            <h5>contact</h5>
            <a href="mailto:avgust13@gmail.com">avgust13@gmail.com</a>
            <a href="https://wa.me/37127754455" target="_blank" rel="noopener noreferrer">
              +371 27 75 44 55
            </a>
            <a href="https://t.me/rosoff" target="_blank" rel="noopener noreferrer">
              @rosoff
            </a>
            <a
              href="https://www.linkedin.com/in/ros-pavloff"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/avgust13" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="/Rostislavs-Pavlovs-Resume_CV-2025.5.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV / Resume (PDF)
            </a>
          </ColumnStyled>
        </GridStyled>
        <BottomStyled>
          <span>© {new Date().getFullYear()} pavloff.dev</span>
          <span>senior ai engineer · remote worldwide</span>
        </BottomStyled>
      </Wrap>
    </FooterStyled>
  );
};

export default Footer;
