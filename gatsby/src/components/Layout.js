import React from 'react';
import { Container } from 'react-bootstrap';
import SimpleReactLightbox from 'simple-react-lightbox';
import Nav from './Nav';
import Footer from './Footer';

export default function HomeLayout({ children }) {
  return (
    <>
      <Nav />
      <SimpleReactLightbox>
        <Container>{children}</Container>
      </SimpleReactLightbox>
      <Footer />
    </>
  );
}
