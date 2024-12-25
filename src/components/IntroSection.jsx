// IntroSection.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const IntroSection = () => (
  <div className="position-relative">
    {/* Carousel as the Background */}
    <Carousel className="my-5" interval={3000} pause="hover">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://shorturl.at/EBBgt"
          alt="First slide"
          style={{ height: '60vh', objectFit: 'cover', opacity: '0.7' }} // Reduced opacity of images
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://shorturl.at/i26zF"
          alt="Second slide"
          style={{ height: '60vh', objectFit: 'cover', opacity: '0.7' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://shorturl.at/ARR44"
          alt="Third slide"
          style={{ height: '60vh', objectFit: 'cover', opacity: '0.7' }}
        />
      </Carousel.Item>
    </Carousel>

    {/* Welcome Message Overlay */}
    <div className="position-absolute top-50 start-50 translate-middle text-center text-light" 
      style={{
        maxWidth: '80%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background to improve text readability
        padding: '20px', // Padding for better spacing
        borderRadius: '10px', // Rounded corners
        opacity: '0.9' // Slight opacity to the text container for a subtle effect
      }}>
      <h1 className="display-4 fw-bold">Welcome to Our Website, Protein!</h1> {/* Bold text for emphasis */}
      <p className="lead">We're excited to have you here. Explore and enjoy our products!</p>
      <a href="#products" className="btn btn-primary btn-lg">Get Started</a>
      </div>
  </div>
);

export default IntroSection;
