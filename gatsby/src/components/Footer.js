import React from 'react';
import { FaFacebookSquare, FaInstagram, FaHeart } from 'react-icons/fa';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import logo from '../assets/images/logo-round-black.png';
import FooterStyles from '../styles/FooterStyles';

export default function Footer() {
  return (
    <footer>
      <FooterStyles>
        <div className="footer-grid">
          <img src={logo} alt="Fame Logo" height="100" />
          <div className="footer-links">
            <ul>
              <li>
                <Link to="/food">Food</Link>
              </li>
              <li>
                <Link to="/art">Art</Link>
              </li>
              <li>
                <Link to="/music">Music</Link>
              </li>
              <li>
                <Link to="/environment">Environment</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/festival">Festival</Link>
              </li>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/weeklyTalk">Weekly Talk</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="separator-gradient-footer" />
        <Container>
          <div className="footer-social">
            <div className="copyright">
              <p>
                &copy;
                <span>F.A.M.E.</span>
                {new Date().getFullYear()}. All rights reserved
              </p>
            </div>
            <div className="social-links">
              <a
                href="https://www.facebook.com/famefest/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaFacebookSquare
                  size="2.5em"
                  style={{ padding: '0 10px' }}
                  className="socialIcon"
                />
                <span className="sr-only">Facebook link</span>
              </a>
              <a
                href="https://www.instagram.com/famefestival_barbados/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaInstagram
                  size="2.5em"
                  style={{ padding: '0 10px' }}
                  className="socialIcon"
                />
                <span className="sr-only">Instagram link</span>
              </a>
            </div>
          </div>
        </Container>

        <div id="colophon">
          <p>
            Website coded with
            <FaHeart
              size="1.5em"
              color="#FD1015"
              style={{ padding: '0 5px' }}
            />
            by{' '}
            <a
              href="https://www.alexgwebdev.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dcf4y5ngp/image/upload/v1595504600/logo_3d_colors.png"
                alt="Alex G - Web developer"
                height="40"
                className="flip"
              />
            </a>
          </p>
        </div>
      </FooterStyles>
    </footer>
  );
}
