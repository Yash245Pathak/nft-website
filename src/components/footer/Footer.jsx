import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
        <hr />
      <div className="footer">
        <div className="footer-container">
          <h3>Join our weekly digest!</h3>
          <span>Get exclusive promotion & updates straight to your inbox.</span>
          <div className="enter">
            <input type="email" placeholder="Enter Your Email" />
            <button className="btn3">Sign Up</button>
          </div>
        </div>
        <div className="footer-text">
          <div className="features">
            <h3>Features</h3>
            <ul>
              <li>Banking</li>
              <li>Device</li>
              <li>Platform</li>
            </ul>
          </div>
          <div className="products">
            <h3>Products</h3>
            <ul>
              <li>About Us</li>
              <li>Sale NFT</li>
              <li>Wallet</li>
              <li>Marketplace</li>
              <li>NFT Token</li>
            </ul>
          </div>
          <div className="resources">
            <h3>Resources</h3>
            <ul>
              <li>Help Center</li>
              <li>Partner</li>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
