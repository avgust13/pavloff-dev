import styled from "styled-components";

import { Wrap } from "@/components/sharedstyles";

const BOOKING_URL = "https://calendar.app.google/q7FtHB7b8GAqKkQA6";

const SectionStyled = styled.section`
  background: ${({ theme }) => theme.colors.ink};
  color: #d8d6c8;
  padding: 84px 0;
`;

const HeadStyled = styled.div`
  margin-bottom: 0;
  border-bottom: 1px solid #34342c;
  padding-bottom: 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  flex-wrap: wrap;
`;

const HeadlineStyled = styled.h2`
  font-family: var(--font-grotesk), sans-serif;
  font-weight: 600;
  font-size: clamp(28px, 4vw, 48px);
  letter-spacing: -0.02em;
  color: #f4f2ea;
  max-width: 20ch;
  line-height: 1.06;
  text-wrap: balance;
  margin: 0;
`;

const IndexStyled = styled.span`
  font-size: 12px;
  color: #7bc06a;
  white-space: nowrap;
`;

const BodyStyled = styled.p`
  margin-top: 22px;
  color: #a9a799;
  max-width: 58ch;
  font-size: 15px;
`;

const CtaRowStyled = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const DarkBtnStyled = styled.a<{ $ghost?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono), monospace;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.green};
  border: 1px solid ${({ theme }) => theme.colors.green};
  color: #fff;
  transition: all 0.15s ease;

  &::before {
    content: "$ ";
    opacity: 0.6;
  }

  &:hover {
    background: #fff;
    color: ${({ theme }) => theme.colors.ink};
    border-color: #fff;
  }

  ${({ $ghost }) =>
    $ghost &&
    `
      background: transparent;
      color: #d8d6c8;
      border-color: #44443a;

      &::before {
        content: "";
      }

      &:hover {
        background: #d8d6c8;
        color: #1a1a17;
        border-color: #d8d6c8;
      }
    `}
`;

const FineStyled = styled.p`
  margin-top: 28px;
  font-size: 12.5px;
  color: #7d7b6f;
`;

const FinalCtaSection = () => {
  return (
    <SectionStyled id="contact">
      <Wrap>
        <HeadStyled>
          <HeadlineStyled>
            Let&apos;s see if your idea is worth building — in 30 minutes.
          </HeadlineStyled>
          <IndexStyled>07 · contact</IndexStyled>
        </HeadStyled>
        <BodyStyled>
          No pitch. No slide deck. We&apos;ll talk about your product, your
          timeline, and whether you actually need a CTO right now (sometimes the
          answer is no — I&apos;ll tell you). You leave with at least one
          concrete next step.
        </BodyStyled>
        <CtaRowStyled>
          <DarkBtnStyled
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            book 30-min-call
          </DarkBtnStyled>
          <DarkBtnStyled
            href="mailto:avgust13@gmail.com?subject=Strategy%20call%20request"
            $ghost
          >
            email me instead
          </DarkBtnStyled>
        </CtaRowStyled>
        <FineStyled>
          Trusted with NDA-protected work for startups across US, UK, and EU.
          References available on request.
        </FineStyled>
      </Wrap>
    </SectionStyled>
  );
};

export default FinalCtaSection;
