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
            <div className="footer-lists">
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
            </div>
            <div className="footer-lists">
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
            </div>
          </div>
        </div>
        <div className="contact">
          A question, a remark? Please
          <span className="underline_svg">
            <a href="mailto:welovefamefestival@gmail.com" aria-label="E-mail">
              <span data-content="contact us" aria-hidden="true" />
              contact us
            </a>
          </span>
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
            <div className="privacy">
              <Link to="/privacy">Privacy Policy</Link>
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
