import Head from "next/head";
import { Container, Main } from "@/components/sharedstyles";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import styled from "styled-components";
import Image from "next/image";

const AIAutomationPageStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const HeroSectionStyled = styled.section`
  text-align: center;
  margin-bottom: 80px;
  padding: 60px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #ffffff, #f8f9fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled.button`
  background: linear-gradient(45deg, #ff6b6b, #ee5a52);
  color: white;
  border: none;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.3);
  }
`;

const WhySection = styled.section`
  margin-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProblemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
`;

const ProblemCard = styled.div`
  background: #f5f5f514;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  border-left: 4px solid #ff6b6b;
`;

const ProblemIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
`;

const ProblemTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProblemDescription = styled.p`
  color: #d9d9d9;
  line-height: 1.6;
`;

const SolutionSection = styled.section`
  margin-bottom: 80px;
  background: #f5f5f508;
  padding: 60px 40px;
  border-radius: 20px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

const FeatureCard = styled.div`
  background: #ffffff05;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #ffffff10;
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;

const FeatureDescription = styled.p`
  color: #d9d9d9;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const FeatureList = styled.ul`
  color: #b3b3b3;
  padding-left: 20px;

  li {
    margin-bottom: 8px;
  }
`;

const BenefitsSection = styled.section`
  margin-bottom: 80px;
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const BenefitCard = styled.div`
  text-align: center;
  padding: 20px;
`;

const BenefitNumber = styled.div`
  font-size: 48px;
  font-weight: 800;
  color: #667eea;
  margin-bottom: 10px;
`;

const BenefitTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const BenefitDescription = styled.p`
  color: #d9d9d9;
`;

const CTASection = styled.section`
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 60px 40px;
  border-radius: 20px;
  color: white;
`;

const CTATitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const CTADescription = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  opacity: 0.9;
`;

export default function AIAutomation() {
  return (
    <Container>
      <Head>
        <title>AI Automation for Small & Medium Businesses | Ros Pavloff</title>
        <meta
          name="description"
          content="Transform your business with AI automation using n8n. Reduce costs, increase efficiency, and automate repetitive tasks. Free consultation available."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
        />
      </Head>
      <Main>
        <Header />
        <AIAutomationPageStyled>
          {/* Hero Section */}
          <HeroSectionStyled>
            <HeroTitle>AI Automation for Your Business</HeroTitle>
            <HeroSubtitle>
              Stop wasting time on repetitive tasks. Let AI handle the boring
              stuff while you focus on growing your business.
            </HeroSubtitle>
            <CTAButton
              onClick={() =>
                window.open(
                  "mailto:avgust13@gmail.com?subject=AI Automation Consultation"
                )
              }
            >
              Get Free Consultation
            </CTAButton>
            <CTAButton
              onClick={() =>
                window.open(
                  "https://wa.me/37127754455?text=Hi! I'm interested in AI automation for my business"
                )
              }
            >
              WhatsApp Me
            </CTAButton>
          </HeroSectionStyled>

          {/* Why You Need This */}
          <WhySection>
            <SectionTitle>Why Your Business Needs AI Automation</SectionTitle>
            <ProblemGrid>
              <ProblemCard>
                <ProblemIcon>⏰</ProblemIcon>
                <ProblemTitle>Time Drain</ProblemTitle>
                <ProblemDescription>
                  Your team spends 40% of their time on repetitive tasks like
                  data entry, email responses, and file management instead of
                  growing the business.
                </ProblemDescription>
              </ProblemCard>

              <ProblemCard>
                <ProblemIcon>💸</ProblemIcon>
                <ProblemTitle>Hidden Costs</ProblemTitle>
                <ProblemDescription>
                  Manual processes cost you thousands monthly in wasted hours,
                  human errors, and missed opportunities that could be
                  automated.
                </ProblemDescription>
              </ProblemCard>

              <ProblemCard>
                <ProblemIcon>📈</ProblemIcon>
                <ProblemTitle>Growth Bottlenecks</ProblemTitle>
                <ProblemDescription>
                  Your business can't scale efficiently because every new client
                  means more manual work, creating operational chaos.
                </ProblemDescription>
              </ProblemCard>
            </ProblemGrid>
          </WhySection>

          {/* Solution Section */}
          <SolutionSection>
            <SectionTitle>
              How n8n AI Automation Transforms Your Business
            </SectionTitle>
            <FeatureGrid>
              <FeatureCard>
                <FeatureIcon>🤖</FeatureIcon>
                <FeatureTitle>Smart Customer Support</FeatureTitle>
                <FeatureDescription>
                  Automate customer inquiries, ticket routing, and follow-ups
                  with AI-powered responses.
                </FeatureDescription>
                <FeatureList>
                  <li>24/7 instant customer responses</li>
                  <li>Automatic ticket categorization</li>
                  <li>Smart escalation to human agents</li>
                  <li>Multi-channel support (email, chat, social)</li>
                </FeatureList>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📊</FeatureIcon>
                <FeatureTitle>Data Processing & Analytics</FeatureTitle>
                <FeatureDescription>
                  Transform raw data into actionable insights automatically.
                </FeatureDescription>
                <FeatureList>
                  <li>Automated report generation</li>
                  <li>Real-time dashboard updates</li>
                  <li>Data validation and cleanup</li>
                  <li>Predictive analytics alerts</li>
                </FeatureList>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>📧</FeatureIcon>
                <FeatureTitle>Marketing Automation</FeatureTitle>
                <FeatureDescription>
                  Personalized campaigns that run themselves based on customer
                  behavior.
                </FeatureDescription>
                <FeatureList>
                  <li>Behavioral email sequences</li>
                  <li>Lead scoring and nurturing</li>
                  <li>Social media posting</li>
                  <li>A/B testing automation</li>
                </FeatureList>
              </FeatureCard>

              <FeatureCard>
                <FeatureIcon>🔄</FeatureIcon>
                <FeatureTitle>Workflow Integration</FeatureTitle>
                <FeatureDescription>
                  Connect all your tools and eliminate manual data transfer
                  between systems.
                </FeatureDescription>
                <FeatureList>
                  <li>CRM synchronization</li>
                  <li>Invoice automation</li>
                  <li>Inventory management</li>
                  <li>Employee onboarding workflows</li>
                </FeatureList>
              </FeatureCard>
            </FeatureGrid>
          </SolutionSection>

          {/* Benefits Section */}
          <BenefitsSection>
            <SectionTitle>Real Results You Can Expect</SectionTitle>
            <BenefitsList>
              <BenefitCard>
                <BenefitNumber>75%</BenefitNumber>
                <BenefitTitle>Time Savings</BenefitTitle>
                <BenefitDescription>
                  Reduce manual work by automating repetitive tasks
                </BenefitDescription>
              </BenefitCard>

              <BenefitCard>
                <BenefitNumber>$5K+</BenefitNumber>
                <BenefitTitle>Monthly Savings</BenefitTitle>
                <BenefitDescription>
                  Average cost reduction from efficiency gains
                </BenefitDescription>
              </BenefitCard>

              <BenefitCard>
                <BenefitNumber>24/7</BenefitNumber>
                <BenefitTitle>Always Working</BenefitTitle>
                <BenefitDescription>
                  Your business runs efficiently even while you sleep
                </BenefitDescription>
              </BenefitCard>

              <BenefitCard>
                <BenefitNumber>99%</BenefitNumber>
                <BenefitTitle>Accuracy Rate</BenefitTitle>
                <BenefitDescription>
                  Eliminate human errors in data processing
                </BenefitDescription>
              </BenefitCard>
            </BenefitsList>
          </BenefitsSection>

          {/* CTA Section */}
          <CTASection>
            <CTATitle>Ready to Transform Your Business?</CTATitle>
            <CTADescription>
              Get a free 30-minute consultation where I'll analyze your current
              processes and show you exactly how AI automation can save you time
              and money.
            </CTADescription>
            {/* <CTAButton onClick={() => window.open('https://calendly.com/ros-pavloff/ai-automation-consultation')}>
              Book Free Strategy Call
            </CTAButton> */}
            <CTAButton
              onClick={() =>
                window.open(
                  "https://wa.me/37127754455?text=Hi! I'm interested in AI automation"
                )
              }
            >
              WhatsApp Me
            </CTAButton>
            <CTAButton
              onClick={() =>
                window.open(
                  "mailto:avgust13@gmail.com?subject=AI Automation - Let's Discuss My Business Needs"
                )
              }
            >
              Email Me Directly
            </CTAButton>
            <div
              style={{ marginTop: "20px", fontSize: "14px", opacity: "0.8" }}
            >
              No obligations • 30-minute free consultation • Custom solution
              designed for your business
            </div>
          </CTASection>
        </AIAutomationPageStyled>
        <Footer />
      </Main>
    </Container>
  );
}
