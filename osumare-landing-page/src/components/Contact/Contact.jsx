import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <ContactSection id="contact">
      <SectionHeader>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Ready to elevate your real estate business? Contact us today for a free consultation.
        </SectionSubtitle>
      </SectionHeader>
      
      <ContactContainer>
        <ContactInfo>
          <ContactTitle>Contact Information</ContactTitle>
          <ContactDescription>
            Fill out the form and our team will get back to you within 24 hours.
          </ContactDescription>
          
          <ContactDetails>
            <ContactItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactText>+91 98765 43210</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>info@osumare.com</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>123 Business Avenue, Pune, India</ContactText>
            </ContactItem>
          </ContactDetails>
          
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
          </SocialLinks>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <FormLabel>Your Name</FormLabel>
              <FormInput 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Email Address</FormLabel>
              <FormInput 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
          </FormRow>
          
          <FormRow>
            <FormGroup>
              <FormLabel>Phone Number</FormLabel>
              <FormInput 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Service Interested In</FormLabel>
              <FormSelect 
                name="service" 
                value={formData.service} 
                onChange={handleChange} 
                required
              >
                <option value="">Select a service</option>
                <option value="seo">SEO for Real Estate</option>
                <option value="ppc">PPC Advertising</option>
                <option value="social">Social Media Marketing</option>
                <option value="email">Email Marketing</option>
                <option value="website">Website Development</option>
                <option value="analytics">Analytics & Reporting</option>
              </FormSelect>
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <FormLabel>Your Message</FormLabel>
            <FormTextarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="5" 
              required
            />
          </FormGroup>
          
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

const ContactSection = styled.section`
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

const ContactContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  background: linear-gradient(135deg, #FF6B00 0%, #FF9D5C 100%);
  padding: 50px;
  color: #fff;
  width: 40%;
  
  @media (max-width: 992px) {
    width: 100%;
    padding: 40px;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ContactDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const ContactDetails = styled.div`
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ContactIcon = styled.div`
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const ContactText = styled.p`
  font-size: 1rem;
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
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #fff;
    color: #FF6B00;
    transform: translateY(-3px);
  }
`;

const ContactForm = styled.form`
  padding: 50px;
  background-color: #fff;
  width: 60%;
  
  @media (max-width: 992px) {
    width: 100%;
    padding: 40px;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #FF6B00;
    outline: none;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #FF6B00;
    outline: none;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #FF6B00;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  display: inline-block;
  padding: 12px 30px;
  background-color: #FF6B00;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #E05A00;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 107, 0, 0.3);
  }
`;

export default Contact;
