import { createGlobalStyle } from 'styled-components';
import font from '../assets/fonts/northen.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: northen;
    src: url(${font});
  }
  html {
    font-family: 'Lato', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: northen;
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  /* mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  } */

  .center {
    text-align: center;
  }
`;

export default Typography;
