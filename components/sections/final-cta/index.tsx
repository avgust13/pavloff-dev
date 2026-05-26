import styled from "styled-components";

const FinalCtaSectionStyled = styled.section`
  max-width: 900px;
  width: 100%;
  margin: 0 auto 80px auto;
  padding: 50px 40px;
  background: linear-gradient(
    135deg,
    rgba(166, 187, 204, 0.08) 0%,
    rgba(166, 187, 204, 0.02) 100%
  );
  border: 1px solid rgba(166, 187, 204, 0.18);
  border-radius: 14px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 36px 22px;
  }
`;

const HeadlineStyled = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const BodyStyled = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0 auto 32px auto;
  max-width: 620px;
`;

const ButtonRowStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const PrimaryButtonStyled = styled.a`
  display: inline-block;
  padding: 14px 28px;
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

const SecondaryButtonStyled = styled.a`
  display: inline-block;
  padding: 14px 28px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 15px;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(166, 187, 204, 0.08);
  }
`;

const TrustLineStyled = styled.p`
  font-size: 13px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.tertiary};
  opacity: 0.75;
  margin: 0;
`;

const FinalCtaSection = () => {
  return (
    <FinalCtaSectionStyled id="contact">
      <HeadlineStyled>
        Let&apos;s see if your idea is worth building &mdash; in 30 minutes.
      </HeadlineStyled>
      <BodyStyled>
        No pitch. No slide deck. We&apos;ll talk about your product, your timeline,
        and whether you actually need a CTO right now (sometimes the answer is
        no &mdash; I&apos;ll tell you). You leave with at least one concrete next
        step. If we&apos;re a fit, we talk about working together.
      </BodyStyled>
      <ButtonRowStyled>
        <PrimaryButtonStyled href="mailto:avgust13@gmail.com?subject=Strategy%20call%20request">
          Email me &mdash; avgust13@gmail.com
        </PrimaryButtonStyled>
        <SecondaryButtonStyled
          href="https://wa.me/37127754455"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp &mdash; +371 27 75 44 55
        </SecondaryButtonStyled>
      </ButtonRowStyled>
      <TrustLineStyled>
        Trusted with NDA-protected work for startups across US, UK, and EU.
        References available on request.
      </TrustLineStyled>
    </FinalCtaSectionStyled>
  );
};

export default FinalCtaSection;
