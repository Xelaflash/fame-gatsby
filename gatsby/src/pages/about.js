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
  .founders-infos {
    p {
      font-size: 16px;
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
          <p className="paragraphTexts">
            The project gathers two main people at the origin of this project
            Margit living in Barbados and Badu a french moroccan music promoter
            who felt in love with the island, the people and its culture..{' '}
            <br />
            Many locals & foreigners professionals joined the project and are
            helping to make it possible (radios, businesses, restaurants,
            marketing directors, stage managers...). <br />
            At the beginning it all started because of their love for the
            island, for the culture, and the international melting pot they
            found there and their love for the local Art. For the first edition
            they want to do an entire day and night, looking for the next
            editions to be longer.
          </p>
          <section className="timeline">
            {founders.map((founder, index) => (
              <div className="single-founder" key={index}>
                <h2>{founder.name}</h2>
                <div className="founder-pic-wrapper">
                  <Img
                    fixed={founder.image.asset.fixed}
                    alt={`${founder.name} - F.A.M.E Founders`}
                    className="founder_img"
                  />
                </div>
                <BlockContent
                  blocks={founder._rawDescriptionText}
                  className="founder-infos"
                />
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
            fixed(width: 300, height: 280) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;
