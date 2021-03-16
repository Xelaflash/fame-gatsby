import React from 'react';
import { Container } from 'react-bootstrap';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BrushStroke from '../components/BrushStroke';

const AboutStyles = styled.div`
  .about {
    margin: 60px auto 80px;
    width: 85%;
  }

  .about_intro {
    position: relative;
  }

  .single-founder {
    margin: 20px 0 60px 0;

    h2 {
      font-size: 4rem;
      color: white;
      text-align: center;
      text-shadow: 0 1px 6px rgba(0, 0, 0, 0.7);
    }
  }

  .founder-pic-wrapper {
    margin: 10px auto;
    text-align: center;
  }
  .founder-infos {
    width: 85%;
    margin: 0 auto 60px auto;
    p {
      line-height: 1.8;
      letter-spacing: 0.6px;
    }
  }
  .separator-gradient {
    height: 6px;
    position: relative;
    width: 60%;
    margin: 20px auto 0;
    background: radial-gradient(
      ellipse farthest-side at top center,
      rgba(255, 255, 255, 0.8),
      transparent
    );
  }
  @media (max-width: 812px) {
    .founder-infos {
      width: 100%;
      text-align: justify;
    }
    .separator-gradient {
      width: 95%;
    }
  }
`;

export default function AboutPage({ data }) {
  const founders = data.founders.nodes;

  return (
    <Layout>
      <AboutStyles>
        <SEO title="About us" keywords={['Fame', 'Barbados', 'community']} />
        <Container>
          <h1 className="title">About Us</h1>
          <BrushStroke />
          <div className="about">
            <p className="paragraphTexts">
              The project gathers two main people at the origin of this project
              Margit living in Barbados and Badu a french moroccan music
              promoter who felt in love with the island, the people and its
              culture.. <br />
              Many locals & foreigners professionals joined the project and are
              helping to make it possible (radios, businesses, restaurants,
              marketing directors, stage managers...). <br />
              At the beginning it all started because of their love for the
              island, for the culture, and the international melting pot they
              found there and their love for the local Art. For the first
              edition they want to do an entire day and night, looking for the
              next editions to be longer.
            </p>
          </div>
          <div className="separator-gradient" />
          <section className="about timeline">
            {founders.map((founder, index) => (
              <div className="single-founder" key={index}>
                <h2>{founder.name}</h2>
                <div className="founder-pic-wrapper">
                  <Img
                    fixed={founder.image.asset.fixed}
                    alt={`${founder.name} - F.A.M.E Founders`}
                    className="avatar"
                  />
                </div>
                <BlockContent
                  blocks={founder._rawDescriptionText}
                  className="founder-infos"
                />
              <div className="separator-gradient"></div>
              </div>
            ))}
          </section>
        </Container>
      </AboutStyles>
    </Layout>
  );
}

export const query = graphql`
  query {
    founders: allSanityAboutPage {
      nodes {
        name
        _rawDescriptionText
        image {
          asset {
            fixed(width: 150, height: 150) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;
