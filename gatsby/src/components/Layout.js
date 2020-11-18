import React from 'react';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

// import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import GlobalStyles from '../styles/GlobalStyles';
import Fonts from '../styles/Fonts';
import Nav from './Nav';
import Logo from './Logo';

// here children == the different pages
export default function Layout({ children }) {
  return (
    <>
      {/* <SEO /> */}
      <GlobalStyles />
      <Fonts />
      <Logo />
      <Nav />
      <Container>{children}</Container>
    </>
  );
}
