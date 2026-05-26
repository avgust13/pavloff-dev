import styled from "styled-components";

const FooterStyled = styled.footer`
  max-width: 900px;
  width: 100%;
  padding: 60px 0 30px 0;
  border-top: 1px solid rgba(166, 187, 204, 0.18);
  margin-top: 40px;
`;

const ColumnsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ColumnTitleStyled = styled.h4`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 6px 0;
`;

const FooterLinkStyled = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.tertiary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  i {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NoteStyled = styled.p`
  font-size: 13px;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
  opacity: 0.85;
`;

const BottomBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid rgba(166, 187, 204, 0.12);
  font-size: 13px;
  color: ${({ theme }) => theme.colors.tertiary};
  opacity: 0.8;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <ColumnsStyled>
        <ColumnStyled>
          <ColumnTitleStyled>Services</ColumnTitleStyled>
          <FooterLinkStyled href="/#services">Fractional AI CTO</FooterLinkStyled>
          <FooterLinkStyled href="/#services">AI MVP (90 days)</FooterLinkStyled>
          <FooterLinkStyled href="/#services">AI Automation</FooterLinkStyled>
          <FooterLinkStyled href="/#services">Architecture Audit</FooterLinkStyled>
          <FooterLinkStyled href="/ai-automation">AI Automation lander →</FooterLinkStyled>
        </ColumnStyled>
        <ColumnStyled>
          <ColumnTitleStyled>Contact</ColumnTitleStyled>
          <FooterLinkStyled href="mailto:avgust13@gmail.com">
            <i className="bi-envelope-at" />
            avgust13@gmail.com
          </FooterLinkStyled>
          <FooterLinkStyled
            href="https://wa.me/37127754455"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi-whatsapp" />
            +371 27 75 44 55
          </FooterLinkStyled>
          <FooterLinkStyled
            href="https://t.me/rosoff"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi-telegram" />
            @rosoff
          </FooterLinkStyled>
          <FooterLinkStyled
            href="https://www.linkedin.com/in/ros-pavloff"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi-linkedin" />
            LinkedIn
          </FooterLinkStyled>
          <FooterLinkStyled
            href="https://github.com/avgust13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi-github" />
            GitHub
          </FooterLinkStyled>
          <FooterLinkStyled
            href="/Rostislavs-Pavlovs-Resume_CV-2025.5.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi-filetype-pdf" />
            CV / Resume (PDF)
          </FooterLinkStyled>
        </ColumnStyled>
        <ColumnStyled>
          <ColumnTitleStyled>About</ColumnTitleStyled>
          <NoteStyled>
            Senior AI Engineer working with founders across US, UK, and EU.
            Based in Europe, working remotely worldwide.
          </NoteStyled>
          <NoteStyled>
            15+ years shipping production software. Anthropic-certified on
            Claude APIs and Claude Code (May 2026).
          </NoteStyled>
        </ColumnStyled>
      </ColumnsStyled>
      <BottomBarStyled>
        <span>&copy; {new Date().getFullYear()} pavloff.dev</span>.
      </BottomBarStyled>
    </FooterStyled>
  );
};

export default Footer;
