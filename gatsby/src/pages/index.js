import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
// import styled from 'styled-components';
import Card from '../components/Card';
import CarouselWrapper from '../components/Carousel';
import Quote from '../components/Quote';

export default function HomePage() {
  const quotes = useStaticQuery(graphql`
    query {
      quote1: sanityQuotes(quoteId: { eq: "Quote1" }) {
        quoteText
      }
      quote2: sanityQuotes(quoteId: { eq: "Quote2" }) {
        quoteText
      }
    }
  `);

  return (
    <>
      <CarouselWrapper />
      <Quote quote={quotes.quote1} />
      <Card />
      <Quote quote={quotes.quote2} />
    </>
  );
}
