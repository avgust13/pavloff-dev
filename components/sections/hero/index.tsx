import styled from "styled-components";

const HeroSectionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 100px 50px 100px;
`;

const WelcomeContailerStyled = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-left: 100px;
`;

const SoftwareDeveloperTextStyled = styled.div`
  font-size: 52px;
  font-weight: 800;
  line-height: 56px;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProfileContainerStyled = styled.div``;

const ContactInfoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  a {
    margin: 0 7px;
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 18px;
  }
`;

const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <WelcomeContailerStyled>
        Hello, I'm Ros,
        <SoftwareDeveloperTextStyled>
          Software
          <br />
          Developer
        </SoftwareDeveloperTextStyled>
      </WelcomeContailerStyled>
      <ProfileContainerStyled>
        <img src="/images/profile.png" alt="Ros Pavloff Profile" width={200} />
        <ContactInfoStyled>
          <a
            href="/Rostislavs-Pavlovs-Resume_CV-2024.8.pdf"
            target="_blank"
          >
            <i className="bi-filetype-pdf"></i>
          </a>
          <a href="mailto:avgust13@gmail.com" target="_blank">
            <i className="bi-envelope-at"></i>
          </a>
          <a href="https://t.me/rosoff" target="_blank">
            <i className="bi-telegram"></i>
          </a>{" "}
          <a href="https://wa.me/37127754455" target="_blank">
            <i className="bi-whatsapp"></i>
          </a>
          <a href="https://www.linkedin.com/in/ros-pavloff" target="_blank">
            <i className="bi-linkedin"></i>
          </a>
          <a href="https://github.com/avgust13" target="_blank">
            <i className="bi-github"></i>
          </a>
        </ContactInfoStyled>
      </ProfileContainerStyled>
    </HeroSectionStyled>
  );
};

export default HeroSection;
