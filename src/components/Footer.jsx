import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-2">
            <h6>About Us</h6>
            <p className="small">We provide high-quality products to help you live healthier. Explore our range of offerings.</p>
          </div>
          <div className="col-12 col-md-4 mb-2">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white small">Home</a></li>
              <li><a href="#products" className="text-white small">Products</a></li>
              <li><a href="#about" className="text-white small">About Us</a></li>
              <li><a href="#contact" className="text-white small">Contact</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-2">
            <h6>Follow Us</h6>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white mx-2 small">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-white mx-2 small">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-white mx-2 small">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-3" />

        <div className="text-center">
          <p className="small">&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
