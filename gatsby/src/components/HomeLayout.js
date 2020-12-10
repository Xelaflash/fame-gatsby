import React from 'react';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleReactLightbox from 'simple-react-lightbox';
import { Container } from 'react-bootstrap';
import GlobalStyles from '../styles/GlobalStyles';
import Fonts from '../styles/Fonts';
import HomeNav from './HomeNav';
import Footer from './Footer';

// here children == the different pages
export default function HomeLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Fonts />
      <HomeNav />
      <SimpleReactLightbox>
        <Container>{children}</Container>
      </SimpleReactLightbox>
      <Footer />
    </>
  );
}
