import styled from 'styled-components';
import underline from '../assets/images/underline.svg';

const FooterStyles = styled.div`
  box-shadow: 0px -2px 10px -3px rgba(0, 0, 0, 0.6);
  padding: 25px 0 0;

  .footer-grid {
    margin: 0 auto 20px auto;
    img {
      margin: 0 100px;
    }
  }

  .footer-lists {
    margin: 20px 100px;
  }

  .footer-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
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
      padding-inline-start: 10px;
    }
  }
  .contact {
    margin: -2rem auto 2.5rem auto;
    text-align: center;
    .underline_svg {
      position: relative;
      margin-left: 5px;
      &::after {
        content: '';
        position: absolute;
        bottom: -0.35rem;
        left: -0.5rem;
        right: -0.5rem;
        height: 0.5rem;
        z-index: -1;
        width: 97%;
        margin: auto;
        background-image: url(${underline});
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    a {
      position: relative;
      text-decoration: none;
      overflow: hidden;
      span {
        position: absolute;
        top: -1px;
        left: 0;
        overflow: hidden;
        transform: translateX(-100%);
        transition: transform 275ms ease;
        &::before {
          display: inline-block;
          content: attr(data-content);
          color: white;
          transform: translateX(100%);
          transition: transform 275ms ease;
        }
      }
      &:hover {
        span {
          transform: translateX(0);
          &::before {
            transform: translateX(0);
          }
        }
      }
    }
  }

  .separator-gradient-footer {
    height: 5px;
    position: relative;
    width: 80%;
    margin: 0 auto 20px auto;
    background: radial-gradient(
      ellipse farthest-side at top center,
      rgba(0, 0, 0, 0.6),
      transparent
    );
  }

  .footer-social {
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

  .privacy {
    a {
      font-size: 17px;
      text-decoration: none;
      :hover {
        text-decoration: underline;
        color: var(--white);
      }
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

  @media (max-width: 900px) {
    .footer-lists {
      margin: 0 40px;
    }
    .footer-links {
      padding: 0;
      a {
        font-size: 2.2rem;
      }
    }
  }
  @media (max-width: 812px) {
    .footer-lists {
      margin: 0 10px;
    }
    .footer-grid {
      img {
        display: flex;
        margin: auto;
      }
    }
    .footer-links {
      justify-content: space-evenly;
      padding: 0;
      a {
        font-size: 2.2rem;
      }
    }
    .footer-social {
      margin: 20px 0;
      text-align: center;
    }
    .copyright {
      margin: 20px auto;
    }
    .privacy {
      margin: 5px 0;
    }
    .social-links {
      margin: 10px 0;
    }
  }
  @media (min-width: 812px) {
    .footer-grid {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .footer-social {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
    }
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    .footer-links {
      margin: 0 60px;
    }
  }
`;

export default FooterStyles;
