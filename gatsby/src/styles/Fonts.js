import { createGlobalStyle } from 'styled-components';
import font from '../assets/fonts/northen.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: northen;
    src: url(${font});
  }

  :root {
    --headings-font: "northen", Helvetica, Arial, sans-serif;
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
    /* text-decoration-color: var(--red); */
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 10px 0 7px;
    margin: 0;
    display: inline;
    line-height: 1.5;
    border-radius:3px;
    box-shadow: 1px 1px 10px -2px rgba(0,0,0,0.6);
  }

  .center {
    text-align: center;
  }
`;

export default Typography;
