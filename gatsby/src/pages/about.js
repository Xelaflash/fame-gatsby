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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px auto;
  }
  .timeline {
    position: relative;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 15px 0;
  }

  .timeline::after {
    content: '';
    position: absolute;
    width: 4px;
    background: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }

  .single-founder {
    border: 1px solid red;
    width: 550px;
    padding: 15px 30px;
    position: relative;
    h2 {
      font-size: 3rem;
      color: white;
      text-align: center;
      text-shadow: 0 1px 6px rgba(0, 0, 0, 0.7);
    }
  }

  .single-founder:nth-child(1) {
    left: -50px;
  }

  .single-founder:nth-child(2) {
    left: 50px;
  }

  .single-founder::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    top: calc(50% - 8px);
    right: -8px;
    background: #ffffff;
    border: 2px solid #006e51;
    border-radius: 16px;
    z-index: 1;
  }

  .single-founder:nth-child(2)::after {
    left: -8px;
  }

  .single-founder::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 2px;
    top: calc(50% - 1px);
    right: 8px;
    background: #006e51;
    z-index: 1;
  }

  .single-founder:nth-child(2)::before {
    left: 8px;
  }

  .founder-pic-wrapper {
    margin: 10px auto;
    text-align: center;
  }
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
