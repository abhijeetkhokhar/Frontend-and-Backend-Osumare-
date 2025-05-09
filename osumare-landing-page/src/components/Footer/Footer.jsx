import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterSection>
      <FooterContainer>
        <FooterTop>
          <FooterLogo>
            <LogoText>OSUMARE</LogoText>
            <LogoTagline>Digital Marketing Excellence</LogoTagline>
          </FooterLogo>
          
          <FooterNavigation>
            <FooterNavColumn>
              <FooterNavTitle>Company</FooterNavTitle>
              <FooterNavList>
                <FooterNavItem><FooterNavLink href="#about">About Us</FooterNavLink></FooterNavItem>
                <FooterNavItem><FooterNavLink href="#services">Services</FooterNavLink></FooterNavItem>
                <FooterNavItem><FooterNavLink href="#work">Our Work</FooterNavLink></FooterNavItem>
                <FooterNavItem><FooterNavLink href="#testimonials">Testimonials</FooterNavLink></FooterNavItem>
                <FooterNavItem><FooterNavLink href="#contact">Contact Us</FooterNavLink></FooterNavItem>
              </FooterNavList>
            </FooterNavColumn>
            
            <FooterNavColumn>
              <FooterNavTitle>Services</FooterNavTitle>
              <FooterNavList>
                <FooterNavItem><FooterNavLink href="#services">SEO for Real Estate</FooterNavLink></FooterNavItem>
                <FooterNavItem><FooterNavLink href="#services">PPC Advertising</FooterNavLink></FooterNavItem>
                <FooterNavItem><FooterNavLink href="#services">Social Media Marketing</FooterNavLink></FooterNavItem>
                <FooterNavItem><FooterNavLink href="#services">Email Marketing</FooterNavLink></FooterNavItem>
                <FooterNavItem><FooterNavLink href="#services">Website Development</FooterNavLink></FooterNavItem>
              </FooterNavList>
            </FooterNavColumn>
            
            <FooterNavColumn>
              <FooterNavTitle>Contact</FooterNavTitle>
              <FooterNavList>
                <FooterContactItem>123 Business Avenue, Pune, India</FooterContactItem>
                <FooterContactItem>info@osumare.com</FooterContactItem>
                <FooterContactItem>+91 98765 43210</FooterContactItem>
                <FooterContactItem>Mon - Fri: 9:00 AM - 6:00 PM</FooterContactItem>
              </FooterNavList>
            </FooterNavColumn>
          </FooterNavigation>
        </FooterTop>
        
        <FooterMiddle>
          <NewsletterContainer>
            <NewsletterTitle>Subscribe to Our Newsletter</NewsletterTitle>
            <NewsletterDescription>
              Stay updated with the latest trends in real estate digital marketing
            </NewsletterDescription>
            <NewsletterForm>
              <NewsletterInput type="email" placeholder="Your email address" />
              <NewsletterButton>Subscribe</NewsletterButton>
            </NewsletterForm>
          </NewsletterContainer>
          
          <SocialContainer>
            <SocialTitle>Follow Us</SocialTitle>
            <SocialLinks>
              <SocialLink href="https://facebook.com" target="_blank">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://youtube.com" target="_blank">
                <FaYoutube />
              </SocialLink>
            </SocialLinks>
          </SocialContainer>
        </FooterMiddle>
        
        <FooterBottom>
          <Copyright>© {new Date().getFullYear()} Osumare. All rights reserved.</Copyright>
          <FooterLinks>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Cookie Policy</FooterLink>
          </FooterLinks>
        </FooterBottom>
      </FooterContainer>
      
      <ScrollToTop onClick={scrollToTop}>
        <FaArrowUp />
      </ScrollToTop>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 80px 20px 30px;
  position: relative;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterLogo = styled.div`
  flex: 1;
  margin-right: 50px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const LogoText = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 10px;
`;

const LogoTagline = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

const FooterNavigation = styled.div`
  display: flex;
  flex: 2;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterNavColumn = styled.div`
  flex: 1;
  min-width: 150px;
  margin-bottom: 30px;
`;

const FooterNavTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: #FF6B00;
  }
`;

const FooterNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterNavItem = styled.li`
  margin-bottom: 10px;
`;

const FooterNavLink = styled.a`
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FF6B00;
  }
`;

const FooterContactItem = styled.li`
  color: #ccc;
  margin-bottom: 15px;
`;

const FooterMiddle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NewsletterContainer = styled.div`
  flex: 2;
  margin-right: 50px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const NewsletterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
`;

const NewsletterDescription = styled.p`
  color: #ccc;
  margin-bottom: 20px;
`;

const NewsletterForm = styled.form`
  display: flex;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
  
  @media (max-width: 576px) {
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

const NewsletterButton = styled.button`
  padding: 12px 20px;
  background-color: #FF6B00;
  color: #fff;
  border: none;
  border-radius: 0 5px 5px 0;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #E05A00;
  }
  
  @media (max-width: 576px) {
    border-radius: 5px;
  }
`;

const SocialContainer = styled.div`
  flex: 1;
`;

const SocialTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #FF6B00;
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid #444;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FooterLink = styled.a`
  color: #ccc;
  font-size: 0.9rem;
  text-decoration: none;
  margin-left: 20px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FF6B00;
  }
  
  @media (max-width: 576px) {
    margin-left: 0;
  }
`;

const ScrollToTop = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FF6B00;
  color: #fff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #E05A00;
    transform: translateY(-5px);
  }
`;

export default Footer;
