import styled from 'styled-components';

const FooterStyles = styled.div`
  box-shadow: 0px -2px 10px -3px rgba(0, 0, 0, 0.6);
  padding: 25px 0 0;

  .footer-grid {
    display: grid;
    gap: 2rem;
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

  @media (max-width: 900px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }
    .footer-links {
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      a {
        font-size: 2.2rem;
      }
    }
  }
`;

export default FooterStyles;
