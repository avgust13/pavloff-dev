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

const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <WelcomeContailerStyled>
        Hello, I'm Ros,
        <SoftwareDeveloperTextStyled>
          Software<br />Developer
        </SoftwareDeveloperTextStyled>
      </WelcomeContailerStyled>
      <ProfileContainerStyled>
        
        <img src="/images/profile.png" alt="Ros Pavloff Profile" width={200} />

      </ProfileContainerStyled>
    </HeroSectionStyled>
  );
};

export default HeroSection;
