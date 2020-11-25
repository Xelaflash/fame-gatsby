import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare, FaInstagram, FaHeart } from 'react-icons/fa';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import logo from '../assets/images/logo-round-black.png';

const FooterStyles = styled.div`
  box-shadow: 0px -2px 10px -3px rgba(0, 0, 0, 0.6);
  padding: 25px 0 0;

  .footer-grid {
    display: grid;
    gap: 2rem;
    --columns: 2;
    grid-template-columns: minmax(200px, 250px) 1fr;
    align-items: center;
    img {
      margin: auto;
    }
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    a {
      font-family: var(--headings-font);
      font-size: 2.5rem;
      letter-spacing: 2px;
      line-height: 1.5;
      transition: all 0.3s;
    }
    a:hover {
      transform: rotate(-5deg);
      display: inline-block;
      color: var(--white);
    }

    ul {
      list-style: none;
      margin: 2rem 0;
    }
  }
  .separator-gradient-footer {
    height: 5px;
    position: relative;
    width: 90%;
    margin: 40px auto 20px;
    background: radial-gradient(
      ellipse farthest-side at top center,
      rgba(0, 0, 0, 0.6),
      transparent
    );
  }

  .footer-social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 20px auto;
  }

  .copyright {
    font-size: 16px;
    p {
      margin: 0;
      line-height: 1;
    }
    span {
      font-family: var(--headings-font);
      margin: 0 5px;
      font-size: 20px;
    }
  }

  .socialIcon {
    transition: all 0.3s;
    &:hover {
      transform: rotate(-5deg);
      display: inline-block;
      color: var(--white);
    }
  }

  #colophon {
    text-align: center;
    padding: 10px 0;
    font-size: 16px;
    p {
      margin: 0;
    }
    a {
      padding-left: 5px;
    }
  }
  @keyframes flip {
    from {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, -360deg);
      animation-timing-function: ease-out;
    }

    40% {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -190deg);
      animation-timing-function: ease-out;
    }

    50% {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -170deg);
      animation-timing-function: ease-in;
    }

    80% {
      transform: perspective(400px) scale3d(0.95, 0.95, 0.95)
        translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }

    to {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }
  }

  .flip:hover {
    animation: 1s both flip;
  }
`;

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
