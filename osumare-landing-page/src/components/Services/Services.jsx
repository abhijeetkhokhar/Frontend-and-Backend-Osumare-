import React from 'react';
import styled from 'styled-components';
import { FaSearchLocation, FaAd, FaInstagram, FaEnvelopeOpenText, FaLaptopCode, FaChartBar } from 'react-icons/fa';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      icon: <FaSearchLocation />,
      title: 'SEO for Real Estate',
      description: 'Improve your website\'s visibility in search results and drive organic traffic from potential property buyers and sellers.'
    },
    {
      id: 2,
      icon: <FaAd />,
      title: 'PPC Advertising',
      description: 'Target potential clients actively searching for properties with tailored pay-per-click campaigns on Google and social platforms.'
    },
    {
      id: 3,
      icon: <FaInstagram />,
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with your audience through strategic social media campaigns designed for real estate.'
    },
    {
      id: 4,
      icon: <FaEnvelopeOpenText />,
      title: 'Email Marketing',
      description: 'Nurture leads and keep your clients informed about new properties and market trends with targeted email campaigns.'
    },
    {
      id: 5,
      icon: <FaLaptopCode />,
      title: 'Website Development',
      description: 'Create stunning, responsive websites that showcase your properties and convert visitors into leads.'
    },
    {
      id: 6,
      icon: <FaChartBar />,
      title: 'Analytics & Reporting',
      description: 'Gain insights into your marketing performance with comprehensive analytics and customized reporting.'
    }
  ];

  return (
    <ServicesSection id="services">
      <SectionHeader>
        <SectionTitle>Our Specialized Digital Marketing Services</SectionTitle>
        <SectionSubtitle>
          Tailored strategies to elevate your real estate business in the digital landscape
        </SectionSubtitle>
      </SectionHeader>
      
      <ServicesGrid>
        {servicesList.map(service => (
          <ServiceCard key={service.id}>
            <ServiceIconWrapper>
              {service.icon}
            </ServiceIconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <LearnMoreButton>Learn More</LearnMoreButton>
          </ServiceCard>
        ))}
      </ServicesGrid>
      
      <CTAContainer>
        <CTAContent>
          <CTATitle>Ready to Transform Your Real Estate Business?</CTATitle>
          <CTADescription>
            Partner with Osumare to leverage the power of digital marketing and stay ahead of the competition.
          </CTADescription>
          <CTAButton href="#contact">Get Started Today</CTAButton>
        </CTAContent>
      </CTAContainer>
    </ServicesSection>
  );
};

const ServicesSection = styled.section`
  padding: 100px 20px;
  background-color: #f8f9fa;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 80px;
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIconWrapper = styled.div`
  font-size: 2.5rem;
  color: #FF6B00;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const LearnMoreButton = styled.button`
  background: none;
  border: none;
  color: #FF6B00;
  font-weight: 600;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:after {
    content: '→';
    margin-left: 5px;
    transition: transform 0.3s ease;
  }
  
  &:hover:after {
    transform: translateX(5px);
  }
`;

const CTAContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #FF6B00 0%, #FF9D5C 100%);
  border-radius: 10px;
  padding: 60px 40px;
  text-align: center;
  box-shadow: 0 15px 30px rgba(255, 107, 0, 0.2);
`;

const CTAContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const CTATitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: #fff;
  color: #FF6B00;
  font-weight: 600;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #333;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export default Services;
