import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import CarouselWrapper from '../components/home/Carousel';
import Cards from '../components/home/Cards';
import HomeGallery from '../components/home/HomeGallery';
import Quote from '../components/home/Quote';
import Partners from '../components/home/Partners';

const HomeStyles = styled.div`
  p {
    max-width: 90%;
    margin: auto;
  }

  .cta {
    display: flex;
    transition: all 0.5s ease;
    margin: 40px auto 0 auto;
    background: transparent;
    font-family: var(--headings-font);
    box-shadow: 0px 34px 30px -19px rgba(0, 0, 0, 0.6);
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    color: var(--black);
    cursor: pointer;
    letter-spacing: 1px;
    outline: none;
    border: solid 2px var(--darkGreen);
    padding: 1rem;
    font-weight: lighter;
    &:hover {
      box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, 0.3);
    }
  }
`;

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
      <SEO />
      <HomeStyles>
        <p>
          F.A.M.E is a movement of <strong>Food</strong>, <strong>Art </strong>
          and <strong>Music</strong> lovers that want to get people together to
          enjoy gatherings with respect for the Environment. <br />
          Our team organises Festivals, Pop ups & Charity events. Our middle
          term focus is the Caribbean and South America where local artists get
          podiums next to international names. <br />
          Our main priority is the creation of awareness for environmental local
          issues, for self-respect and healthy lifestyle through the promotion &
          discovery of a sustainable lifestyle : fresh & local food, healthy
          recipes, self-care & artistic practices…
        </p>
        <button type="button" className="cta">
          <Link to="/community">Check our community</Link>
        </button>

        <Quote quote={quotes.quote1} />
        <CarouselWrapper />
        <Cards />
        <HomeGallery />
        <Partners />
        <Quote quote={quotes.quote2} />
      </HomeStyles>
    </>
  );
}
