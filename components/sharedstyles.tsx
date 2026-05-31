import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
`;

// Centered content column shared by every section.
const Wrap = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 32px;
`;

// `$ command`-style button. Solid ink by default, outlined when $ghost.
const Btn = styled.a<{ $ghost?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono), monospace;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.paper};
  border: 1px solid ${({ theme }) => theme.colors.ink};
  transition: all 0.15s ease;

  &::before {
    content: "$ ";
    opacity: 0.6;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.green};
    color: #fff;
  }

  ${({ $ghost }) =>
    $ghost &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.colors.ink};

      &::before {
        content: "";
      }

      &:hover {
        background: ${({ theme }) => theme.colors.ink};
        color: ${({ theme }) => theme.colors.paper};
      }
    `}
`;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

// Blinking terminal cursor block.
const Blink = styled.span`
  width: 9px;
  height: 16px;
  background: ${({ theme }) => theme.colors.green};
  display: inline-block;
  animation: ${blink} 1.1s steps(2) infinite;
`;

export { Container, Main, Wrap, Btn, Blink };
