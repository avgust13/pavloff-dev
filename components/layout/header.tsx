import styled from "styled-components";

const BOOKING_URL = "https://calendar.app.google/q7FtHB7b8GAqKkQA6";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding: 0 100px 0 70px;
  height: 60px;
  top: 0;
  width: 100%;
  background-color: #221F1F;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const BrandContainerStyled = styled.div`
  font-family: var(--font-inter), sans-serif;
  font-weight: 700;
  font-size: 22px;
`;

const DomainStyled = styled.span`
  font-weight: 400;
`;

const RightGroupStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 30px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 16px;
    font-weight: 400;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const BookButtonStyled = styled.a`
  display: inline-block;
  padding: 9px 18px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #221F1F;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(166, 187, 204, 0.25);
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <BrandContainerStyled>
        pavloff<DomainStyled>.dev</DomainStyled>
      </BrandContainerStyled>
      <RightGroupStyled>
        <Nav>
          <NavList>
            <NavItem><a href="/#about">Why me</a></NavItem>
            <NavItem><a href="/#services">Services</a></NavItem>
            <NavItem><a href="/#case-studies">Case Studies</a></NavItem>
            <NavItem><a href="/#faq">FAQ</a></NavItem>
          </NavList>
        </Nav>
        <BookButtonStyled
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call
        </BookButtonStyled>
      </RightGroupStyled>
    </HeaderStyled>
  );
};

export default Header;
