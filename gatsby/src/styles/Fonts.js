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
    text-decoration: none;
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

  .center {
    text-align: center;
  }
`;

export default Typography;
