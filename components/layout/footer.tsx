import styled from "styled-components";

const FooterStyled = styled.div`
  padding: 100px 0 10px 0;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.tertiary};
`;

const Footer = () => {
  return (
    <FooterStyled>&copy; pavloff.dev {new Date().getFullYear()}</FooterStyled>
  );
};

export default Footer;
