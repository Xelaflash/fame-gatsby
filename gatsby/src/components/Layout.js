import React, { useEffect } from 'react';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import GlobalStyles from '../styles/GlobalStyles';
import Fonts from '../styles/Fonts';
import Nav from './Nav';
import Footer from './Footer';

export default function HomeLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Fonts />
      <Nav />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
