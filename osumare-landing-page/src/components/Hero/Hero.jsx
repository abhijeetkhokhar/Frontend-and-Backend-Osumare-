import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-tagline">Digital Marketing Agency</p>
            <h1 className="hero-title">
              Unlock the Potential of <span className="text-primary">Digital Real Estate</span> Excellence
            </h1>
            <p className="hero-description">
              At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our specialized digital marketing solutions are crafted to elevate your real estate business.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get Started</a>
              <a href="#services" className="btn btn-secondary">Our Services</a>
            </div>
          </div>
          <div className="hero-image-container">
            <img 
              src="/hero-image.svg" 
              alt="Digital Real Estate Marketing" 
              className="hero-image"
            />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll Down</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
};

export default Hero;
