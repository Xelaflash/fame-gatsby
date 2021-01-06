import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/background.png';
import brush from '../assets/images/brush.svg';
import underline from '../assets/images/underline.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --white: #fff;
    --grey: #efefef;
    --darkGrey: #0E0000;
    --lightGrey: #F4F4F4;
    --red: #eb624d;
    --darkOrange: #fc7d3a;
    --orange: #fea433;
    --yellow: #ffc600;
    --violet: #955c90;
    --pink: #c65f6b;
    --blueGrey: #4e5b6c;
    --lightGreen: #6bac22;
    --darkGreen: #3e7520;
  }

  html {
    background: url(${bg}) no-repeat center center fixed;
    background-size: cover;
    min-height: 100vh;
    font-size:10px;
  }

  body {
    background-color: transparent;
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  /* button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  } */
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  hr {
    border: 0;
    height: 8px;
    background-image: url(${brush});
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }
  .sr-only {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    top: auto;
    overflow: hidden;
  }

  .homeLogo {
    margin: 40px auto;
    display:block;
  }
  .paragraphTexts {
    margin: 40px auto 20px auto;
    width: 80%;
  }
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
  .link_white {
    transition: all 0.3s ease;
    &:hover {
    color: var(--white);
    }
  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.8);
    margin: 10px auto;
  }

  .avatar-small {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.8);
    margin: 10px auto;
  }
`;

export default GlobalStyles;
