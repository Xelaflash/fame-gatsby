import React, { useEffect } from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import { Container } from 'react-bootstrap';
import HomeNav from './HomeNav';

// here children == the different pages
export default function HomeLayout({ children }) {
  useEffect(() => {
    console.log('HomeLayout mounted');
    return () => {
      console.log('HomeLayout unmounted');
    };
  }, []);
  return (
    <>
      <HomeNav />
      <SimpleReactLightbox>
        <Container>{children}</Container>
      </SimpleReactLightbox>
    </>
  );
}
