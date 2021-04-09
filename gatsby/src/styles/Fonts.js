import { createGlobalStyle } from 'styled-components';
import font from '../assets/fonts/NORTHEN.woff2';
import font2 from '../assets/fonts/NORTHEN.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: NORTHEN;
    src: url(${font}) format('woff2'),
    url(${font2}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }


  :root {
    --headings-font: "NORTHEN", Helvetica, Arial, sans-serif;
    --body-font: 'Open Sans', sans-serif;
  }

  body {
    font-family: var(--body-font);
    color: var(--black);
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: var(--headings-font);
    font-weight: normal;
    margin: 0;
  }

  a {
    color: var(--black);
    text-decoration: none;
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
    &:hover {
      color: var(--black);
      text-decoration: none;
    }
  }
  .text-link {
    color: var(--black);
    text-decoration: underline;
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
    &:hover {
      color: var(--black);
      text-decoration: none;
    }
  }
  mark, .mark {
    background: var(--yellow);
    padding: 2px 5px;
    margin: 0;
    border-radius:3px;
    box-shadow: 1px 1px 10px -2px rgba(0,0,0,0.8);
  }

  .title {
    color: var(--white);
    text-align: center;
    margin: 60px auto -5px auto;
    font-size: 5rem;
    letter-spacing: 2px;
  }
  @media (max-width: 812px) {
    .title {
      font-size: 4rem;
    }
  }
`;

export default Typography;
