import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import { Container } from 'react-bootstrap';
import HomeNav from './HomeNav';
import Footer from './Footer';

export default function HomeLayout({ children }) {
  return (
    <>
      <HomeNav />
      <SimpleReactLightbox>
        <Container>{children}</Container>
      </SimpleReactLightbox>
      <Footer />
    </>
  );
}
