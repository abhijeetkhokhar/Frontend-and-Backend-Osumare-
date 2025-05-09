import React, { useState } from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonialsList = [
    {
      id: 1,
      name: 'Rahul Sharma',
      position: 'CEO, Sharma Properties',
      image: '/testimonial1.svg',
      rating: 5,
      text: 'Working with Osumare has been a game-changer for our real estate business. Their digital marketing strategies have significantly increased our online visibility and lead generation. We\'ve seen a 3x increase in qualified leads since partnering with them!'
    },
    {
      id: 2,
      name: 'Priya Patel',
      position: 'Marketing Director, Patel Realty',
      image: '/testimonial2.svg',
      rating: 5,
      text: 'Osumare\'s team truly understands the real estate market. Their targeted campaigns and SEO expertise have helped us rank higher in search results and attract more potential buyers. Their data-driven approach delivers real results.'
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      position: 'Owner, Mehta Housing',
      image: '/testimonial3.svg',
      rating: 5,
      text: 'The ROI we\'ve seen from Osumare\'s digital marketing services has been impressive. Their team is responsive, creative, and always ahead of the curve with the latest digital strategies. I highly recommend them to any real estate business looking to grow.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsList.length - 1 : prevIndex - 1
    );
  };

  return (
    <TestimonialsSection id="testimonials">
      <SectionHeader>
        <SectionTitle>Client Success Stories</SectionTitle>
        <SectionSubtitle>
          Hear from our clients about how Osumare has transformed their real estate business
        </SectionSubtitle>
      </SectionHeader>
      
      <TestimonialSlider>
        <SliderControls>
          <SliderButton onClick={prevTestimonial}>
            <FaChevronLeft />
          </SliderButton>
          <SliderButton onClick={nextTestimonial}>
            <FaChevronRight />
          </SliderButton>
        </SliderControls>
        
        <TestimonialCard>
          <QuoteIcon>
            <FaQuoteLeft />
          </QuoteIcon>
          <TestimonialText>
            {testimonialsList[currentIndex].text}
          </TestimonialText>
          <RatingContainer>
            {[...Array(testimonialsList[currentIndex].rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </RatingContainer>
          <ClientInfo>
            <ClientImageContainer>
              <ClientImage src={testimonialsList[currentIndex].image} alt={testimonialsList[currentIndex].name} />
            </ClientImageContainer>
            <ClientDetails>
              <ClientName>{testimonialsList[currentIndex].name}</ClientName>
              <ClientPosition>{testimonialsList[currentIndex].position}</ClientPosition>
            </ClientDetails>
          </ClientInfo>
        </TestimonialCard>
        
        <SliderDots>
          {testimonialsList.map((_, index) => (
            <SliderDot 
              key={index} 
              active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </SliderDots>
      </TestimonialSlider>
      
      <TestimonialStats>
        <StatItem>
          <StatNumber>50+</StatNumber>
          <StatLabel>Happy Clients</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>200+</StatNumber>
          <StatLabel>Projects Completed</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>10+</StatNumber>
          <StatLabel>Years Experience</StatLabel>
        </StatItem>
      </TestimonialStats>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  padding: 100px 20px;
  background-color: #fff;
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

const TestimonialSlider = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto 80px;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: -30px;
  right: -30px;
  transform: translateY(-50%);
  z-index: 1;
  
  @media (max-width: 768px) {
    left: 0;
    right: 0;
  }
`;

const SliderButton = styled.button`
  background-color: #fff;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #333;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #FF6B00;
    color: #fff;
  }
`;

const TestimonialCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 50px 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: #FF6B00;
  opacity: 0.3;
  margin-bottom: 20px;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 30px;
  font-style: italic;
`;

const RatingContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: #FFD700;
  font-size: 1.2rem;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ClientImageContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  border: 3px solid #FF6B00;
`;

const ClientImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ClientDetails = styled.div``;

const ClientName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 5px;
`;

const ClientPosition = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const SliderDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#FF6B00' : '#ddd'};
  border: none;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#FF6B00' : '#ccc'};
  }
`;

const TestimonialStats = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 20px;
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: #FF6B00;
  margin-bottom: 5px;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  color: #666;
`;

export default Testimonials;
