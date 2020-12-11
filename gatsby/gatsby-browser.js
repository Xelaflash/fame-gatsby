import React from 'react';
import GlobalStyles from './src/styles/GlobalStyles';
import Fonts from './src/styles/Fonts';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function wrapPageElement({ element }) {
  return (
    <>
      <GlobalStyles />
      <Fonts />
      {element}
    </>
  );
}
