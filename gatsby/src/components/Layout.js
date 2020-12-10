import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Nav from './Nav';
import Footer from './Footer';

export default function HomeLayout({ children }) {
  useEffect(() => {
    console.log('Layout mounted');
    return () => {
      console.log('Layout unmounted');
    };
  }, []);
  return (
    <>
      <Nav />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
