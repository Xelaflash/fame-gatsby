import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import Nav from './Nav';
import Footer from './Footer';

export default function HomeLayout({ children }) {
  return (
    <>
      <Nav />
      <SimpleReactLightbox>{children}</SimpleReactLightbox>
      <Footer />
    </>
  );
}
