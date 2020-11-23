import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import CarouselWrapper from '../components/Carousel';
import Quote from '../components/Quotes';

export default function HomePage() {
  return (
    <>
      <CarouselWrapper />
      <Quote />
      <Card />
      <Quote />
    </>
  );
}
