import styled from "styled-components";

import { Wrap, Btn, Blink } from "@/components/sharedstyles";

const BOOKING_URL = "https://calendar.app.google/q7FtHB7b8GAqKkQA6";

const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(236, 234, 226, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`;

const NavRowStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

const BrandStyled = styled.a`
  font-weight: 700;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.ink};
`;

const NavLinksStyled = styled.nav`
  display: flex;
  gap: 26px;

  a {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.inkSoft};
  }

  a::before {
    content: "~/";
    color: ${({ theme }) => theme.colors.line};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.green};
  }

  @media (max-width: 840px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Wrap>
        <NavRowStyled>
          <BrandStyled href="#top">
            pavloff.dev
            <Blink />
          </BrandStyled>
          <NavLinksStyled>
            <a href="#why">why</a>
            <a href="#services">services</a>
            <a href="#work">work</a>
            <a href="#faq">faq</a>
          </NavLinksStyled>
          <Btn href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            book-a-call
          </Btn>
        </NavRowStyled>
      </Wrap>
    </HeaderStyled>
  );
};

export default Header;
