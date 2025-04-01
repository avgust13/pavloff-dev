import styled from "styled-components";
import Image from "next/image";

import Title from "@/components/sections/title";

const ServicesSectionStyled = styled.div`
  margin: 0 100px;
`;

const ServicesContainerStyled = styled.div`
  padding: 20px 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled.div`
  background-color: #f5f5f514;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIconTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ServiceIcon = styled.span`
  font-size: 32px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;

const ServiceItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

const ServiceItem = styled.div`
  padding-top: 12px;
  border-top: 1px solid #a6bbcc;

  &:first-child {
    border-top: none;
    padding-top: 0;
  }
`;

const ServiceSubtitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px 0;
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  color: #d9d9d9;
  line-height: 1.5;
  margin: 0;
`;

const ServicesSection = () => {
  return (
    <ServicesSectionStyled>
      <Title name="services" />
      <ServicesContainerStyled>
        <ServicesGrid>
          {[
            {
              id: 1,
              title: "Full-Stack & Enterprise Software Development",
              icon: "/icons/dev.png",
              items: [
                {
                  subtitle: "Custom Web & Mobile Applications",
                  description:
                    "Design, development, and maintenance of secure, scalable applications using modern frameworks (.NET, React, Angular, Node.js).",
                },
                {
                  subtitle: "Cloud & Microservices Architecture",
                  description:
                    "Transform legacy systems into cloud-native, microservices-based architectures for improved scalability and performance.",
                },
              ],
            },
            {
              id: 2,
              title: "AI & Machine Learning Solutions",
              icon: "/icons/ai.png",
              items: [
                {
                  subtitle: "Custom AI/ML Model Development",
                  description:
                    "Build and deploy tailored machine learning models for predictive analytics, personalization, and process automation using TensorFlow, PyTorch, and Keras.",
                },
                {
                  subtitle: "Data Analytics & Predictive Modeling",
                  description:
                    "Leverage big data to derive actionable insights and optimize business operations through advanced analytics.",
                },
              ],
            },
            {
              id: 3,
              title: "Computer Vision Solutions",
              icon: "/icons/vision.png",
              items: [
                {
                  subtitle: "Image & Video Processing",
                  description:
                    "Develop systems for object detection, image recognition, and real-time video analytics to automate inspection, monitoring, and quality control tasks.",
                },
                {
                  subtitle: "Custom Vision Applications",
                  description:
                    "Create tailored computer vision solutions for industries such as retail, manufacturing, and security.",
                },
              ],
            },
            {
              id: 4,
              title: "Algorithmic Trading Systems",
              icon: "/icons/trading.png",
              items: [
                {
                  subtitle: "Automated Trading Algorithms",
                  description:
                    "Design and implement high-performance, data-driven trading systems that analyze real-time market data to execute trades efficiently.",
                },
                {
                  subtitle: "Quantitative Analysis & Strategy Optimization",
                  description:
                    "Utilize AI and statistical methods to develop, test, and optimize trading strategies, ensuring robust risk management.",
                },
              ],
            },
            {
              id: 5,
              title: "Blockchain & Decentralized Applications (dApps)",
              icon: "/icons/blockchain.png",
              items: [
                {
                  subtitle: "Blockchain Integration & dApp Development",
                  description:
                    "Develop decentralized applications and integrate blockchain technologies (Ethereum, EOS, NEO) for secure, transparent, and innovative solutions.",
                },
              ],
            },
            {
              id: 6,
              title: "Consultation & Technical Leadership",
              icon: "/icons/management.png",
              items: [
                {
                  subtitle: "Technical Strategy & Architecture",
                  description:
                    "Provide expert consultation on software architecture, team management, and process optimization to ensure robust, future-proof systems.",
                },
                {
                  subtitle: "Team Leadership & Project Management",
                  description:
                    "Leverage extensive experience in leading cross-functional teams to drive project success and innovation.",
                },
              ],
            },
          ].map((service) => (
            <ServiceCard key={service.id}>
              <ServiceIconTitle>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceIcon>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                  />
                </ServiceIcon>
              </ServiceIconTitle>
              <ServiceItems>
                {service.items.map((item, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <ServiceItem key={index}>
                    <ServiceSubtitle>{item.subtitle}</ServiceSubtitle>
                    <ServiceDescription>{item.description}</ServiceDescription>
                  </ServiceItem>
                ))}
              </ServiceItems>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainerStyled>
    </ServicesSectionStyled>
  );
};

export default ServicesSection;
