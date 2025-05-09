import React from 'react';
import { FaChartLine, FaSearchDollar, FaMobileAlt, FaUsers } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const featuresList = [
    {
      id: 1,
      icon: <FaChartLine />,
      title: 'Data-driven Strategies',
      description: 'We analyze market trends, consumer behavior, and competition to create strategies that deliver results.'
    },
    {
      id: 2,
      icon: <FaSearchDollar />,
      title: 'ROI-focused Approach',
      description: 'Our campaigns are designed to maximize your return on investment and drive business growth.'
    },
    {
      id: 3,
      icon: <FaMobileAlt />,
      title: 'Mobile-first Optimization',
      description: 'We ensure your digital presence is optimized for mobile users, capturing leads on every device.'
    },
    {
      id: 4,
      icon: <FaUsers />,
      title: 'Targeted Audience Reach',
      description: 'We help you connect with potential buyers and sellers who are actively looking for properties.'
    }
  ];

  return (
    <section id="about" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Osumare?</h2>
          <p className="section-subtitle">
            With our specialized digital marketing services tailored for real estate, we focus on delivering what matters most to your business.
          </p>
        </div>
        
        <div className="features-grid">
          {featuresList.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="statistics-container">
          <div className="stat-item">
            <h3 className="stat-number">200+</h3>
            <p className="stat-label">Real Estate Clients</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">500+</h3>
            <p className="stat-label">Campaigns Delivered</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">10X</h3>
            <p className="stat-label">Revenue Growth</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">95%</h3>
            <p className="stat-label">Client Retention</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
