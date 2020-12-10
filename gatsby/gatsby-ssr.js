import React from 'react';
import GlobalStyles from './src/styles/GlobalStyles';
import Fonts from './src/styles/Fonts';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './src/components/Layout';
import HomeLayout from './src/components/HomeLayout';

export function wrapPageElement({ element }) {
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  if (url === '/') {
    return (
      <HomeLayout>
        <GlobalStyles />
        <Fonts />
        {element}
      </HomeLayout>
    );
  }
  return (
    <Layout>
      <GlobalStyles />
      <Fonts />
      {element}
    </Layout>
  );
}
