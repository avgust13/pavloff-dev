import styled from "styled-components";

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
`;

const BrandContainerStyled = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 22px;
`;

const DomainStyled = styled.span`
  font-weight: 400;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
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

const Header = () => {
  return (
    <HeaderStyled>
      <BrandContainerStyled>pavloff<DomainStyled>.dev</DomainStyled></BrandContainerStyled>
      <Nav>
        <NavList>
          <NavItem><a href="#about">About</a></NavItem>
          {/* <NavItem><a href="#experience">Experience</a></NavItem> */}
          <NavItem><a href="#certification">Certification</a></NavItem>
        </NavList>
      </Nav>
    </HeaderStyled>
  );
}

export default Header;