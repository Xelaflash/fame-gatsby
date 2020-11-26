import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
// import styled from 'styled-components';
import Cards from '../components/Cards';
import CarouselWrapper from '../components/Carousel';
import HomeGallery from '../components/HomeGallery';
import Quote from '../components/Quote';
import fameLogoText from '../assets/images/logo-text.png';

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
      <img src={fameLogoText} alt="" height="200" className="homeLogo" />
      <p>
        F.A.M.E is a movement of <strong>Food</strong>, <strong>Art </strong>
        and <strong>Music</strong> lovers that want to get people together to
        enjoy gatherings with respect for the Environment. <br />
        Our team organises Festivals, Pop ups & Charity events. Our middle term
        focus is the Caribbean and South America where local artists get podiums
        next to international names. <br />
        Our main priority is the creation of awareness for environmental local
        issues, for self-respect and healthy lifestyle through the promotion &
        discovery of a sustainable lifestyle : fresh & local food, healthy
        recipes, self-care & artistic practices…
      </p>
      <Quote quote={quotes.quote1} />
      <CarouselWrapper />
      <Cards />
      <HomeGallery />
      <Quote quote={quotes.quote2} />
    </>
  );
}
