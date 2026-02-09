import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="text-2xl font-bold uppercase mb-4">
              <span>Neon</span>
              <span className="text-gradient">Store</span>
            </div>
            <p className="text-gray-400">The future of technology, delivered today.</p>
          </div>
          
          <div className="footer-col">
            <h3>Shop</h3>
            <ul>
              <li><a href="#">All Products</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Featured</a></li>
              <li><a href="#">Deals</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe for the latest drops.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button className="btn btn-primary w-full">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NeonStore Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
