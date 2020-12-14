import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import SEO from '../components/SEO';
import CarouselWrapper from '../components/home/Carousel';
import Cards from '../components/home/Cards';
import HomeGallery from '../components/home/HomeGallery';
import Quote from '../components/home/Quote';
import Partners from '../components/home/Partners';
import HomeLayout from '../components/HomeLayout';

const HomeStyles = styled.div`
  .video {
    border-radius: 5px;
    box-shadow: 7px 5px 15px 0px rgba(0, 0, 0, 0.5);
    margin: 60px auto;
    max-width: 75%;
  }
  #intro_text {
    max-width: 90%;
    margin: 50px auto 20px auto;
  }

  .cta {
    display: flex;
    transition: all 0.5s ease;
    margin: 40px auto 0 auto;
    background: transparent;
    font-family: var(--headings-font);
    box-shadow: 0px 34px 30px -19px rgba(0, 0, 0, 0.6);
    border-radius: 50px;
    color: var(--black);
    cursor: pointer;
    letter-spacing: 1px;
    outline: none;
    border: solid 2px var(--white);
    padding: 12px 20px;
    font-weight: lighter;
    &:hover {
      box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, 0.3);
    }
    a {
      color: white;
    }
  }
`;

export default function HomePage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
      <SEO title=" " />
      <HomeLayout>
        <HomeStyles>
          <p id="intro_text">
            F.A.M.E is a movement of <strong>Food</strong>,{' '}
            <strong>Art </strong>
            and <strong>Music</strong> lovers that want to get people together
            to enjoy gatherings with respect for the Environment. <br />
            Our team organises Festivals, Pop ups & Charity events. Our middle
            term focus is the Caribbean and South America where local artists
            get podiums next to international names. <br />
            Our main priority is the creation of awareness for environmental
            local issues, for self-respect and healthy lifestyle through the
            promotion & discovery of a sustainable lifestyle : fresh & local
            food, healthy recipes, self-care & artistic practices…
          </p>
          <button type="button" className="cta">
            <Link to="/community">Check our community</Link>
          </button>
          <div
            className="video embed-responsive embed-responsive-16by9"
            data-aos="fade-up-right"
            data-aos-delay="150"
            data-aos-offset="200"
            data-aos-duration="600"
          >
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube-nocookie.com/embed/k19YEtYhhes"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="F.A.M.E. Weekly Talk Barbados on Instagram Live !
            A way to collectively inform, promote & help many..."
              loading="lazy"
            />
          </div>
          <Quote quote={quotes.quote1} />
          <CarouselWrapper />
          <Cards />
          <HomeGallery />
          <Partners />
          <Quote quote={quotes.quote2} />
        </HomeStyles>
      </HomeLayout>
    </>
  );
}
