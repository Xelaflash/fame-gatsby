import React from 'react';
import GlobalStyles from './src/styles/GlobalStyles';
import Fonts from './src/styles/Fonts';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './src/components/Layout';

export function wrapPageElement({ element }) {
  return (
    <Layout>
      <GlobalStyles />
      <Fonts />
      {element}
    </Layout>
  );
}
