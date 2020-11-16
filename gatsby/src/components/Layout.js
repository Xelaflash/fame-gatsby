import React from 'react';
import 'normalize.css';
// import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Fonts from '../styles/Fonts';

// here children == the different pages
export default function Layout({ children }) {
  return (
    <>
      {/* <SEO /> */}
      <GlobalStyles />
      <Fonts />
      {children}
    </>
  );
}
