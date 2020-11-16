import React from 'react';
import 'normalize.css';
// import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Fonts from '../styles/Fonts';
import Nav from './Nav';

// here children == the different pages
export default function Layout({ children }) {
  return (
    <>
      {/* <SEO /> */}
      <GlobalStyles />
      <Fonts />
      <Nav />
      {children}
    </>
  );
}
