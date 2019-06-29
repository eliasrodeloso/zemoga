import React from 'react';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import './Footer.scss';

const Footer = () => (
  <footer className="Footer columns">
    <div className="Footer-column column">
      <ul className="Footer-navigation">
        <li className="Footer-item">
          <a href="/terms" className="Footer-link">
            Terms and Conditions
          </a>
        </li>
        <li className="Footer-item">
          <a href="/privacy" className="Footer-link">
            Privacy Policy
          </a>
        </li>
        <li className="Footer-item">
          <a href="/contact-us" className="Footer-link">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
    <div className="Footer-column Footer-column--right column is-one-quarter">
      <span className="Footer-social">Follow Us</span>
      <a href="https://facebook.com" className="Footer-link">
        <FacebookIcon className="Footer-social-icon" />
      </a>
      <a href="https://twitter.com" className="Footer-link">
        <TwitterIcon className="Footer-social-icon" />
      </a>
    </div>
  </footer>
);

export default Footer;
