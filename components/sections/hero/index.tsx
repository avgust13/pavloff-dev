import styled from "styled-components";

const HeroSectionStyled = styled.section`
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  margin: 60px 100px 70px 100px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 30px 0 40px 0;
    gap: 30px;
  }
`;

const CopyContainerStyled = styled.div`
  margin-left: 100px;
  max-width: 600px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const EyebrowStyled = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.tertiary};
  margin-bottom: 16px;
`;

const HeadlineStyled = styled.h1`
  font-size: 44px;
  font-weight: 800;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 22px 0;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SubheadlineStyled = styled.p`
  font-size: 17px;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0 0 32px 0;

  strong {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
  }
`;

const CtaRowStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 18px;
`;

const PrimaryCtaStyled = styled.a`
  display: inline-block;
  padding: 14px 26px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #221F1F;
  font-size: 15px;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(166, 187, 204, 0.25);
  }
`;

const SecondaryCtaStyled = styled.a`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const MicrocopyStyled = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
  max-width: 520px;
  opacity: 0.8;
`;

const ProfileContainerStyled = styled.div`
  flex-shrink: 0;
`;

const ProfileImageStyled = styled.img`
  width: 240px;
  height: 300px;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    width: 200px;
    height: 250px;
  }
`;

const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <CopyContainerStyled>
        <EyebrowStyled>Ros Pavloff &middot; Senior AI Engineer</EyebrowStyled>
        <HeadlineStyled>
          Ship your AI product &mdash; or hire the senior engineer to lead the team that will.
        </HeadlineStyled>
        <SubheadlineStyled>
          I work with founders two ways: as your <strong>Fractional AI CTO</strong>{" "}
          ($3&ndash;8K/mo, hands-on technical leadership) or by{" "}
          <strong>building your AI MVP in 90 days</strong> (fixed scope, fixed price).
          20+ years shipping production software. Anthropic-certified on Claude APIs and agentic workflows.
        </SubheadlineStyled>
        <CtaRowStyled>
          <PrimaryCtaStyled
            href="https://calendar.app.google/q7FtHB7b8GAqKkQA6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let&apos;s talk &mdash; book a 30-min call
          </PrimaryCtaStyled>
          <SecondaryCtaStyled href="#services">
            See how I work &rarr;
          </SecondaryCtaStyled>
        </CtaRowStyled>
        <MicrocopyStyled>
          No pitch deck. We&apos;ll map your idea or your current product in 30 minutes, and
          you&apos;ll leave with at least one concrete next step &mdash; whether or not we
          work together.
        </MicrocopyStyled>
      </CopyContainerStyled>
      <ProfileContainerStyled>
        <ProfileImageStyled
          src="/images/ros.jpg"
          alt="Ros Pavloff — Fractional AI CTO"
          width={240}
          height={300}
        />
      </ProfileContainerStyled>
    </HeroSectionStyled>
  );
};

export default HeroSection;
