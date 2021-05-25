import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { SRLWrapper } from 'simple-react-lightbox';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BrushStroke from '../components/BrushStroke';

const FestivalGallStyles = styled.div`
  .gallery-wrapper {
    margin: 40px auto;
  }
  .under_title {
    text-align: center;
    margin: 30px auto -20px auto;
    h2 {
      font-size: 1.5em;
      color: --darkGreen;
      text-shadow: 0.5px 0px 0px white;
    }
  }
`;

export default function FestivalPage() {
  const data = useStaticQuery(graphql`
    query {
      festivalGalleryImgs: allSanityFestivalGallery {
        nodes {
          id
          name
          image {
            asset {
              fluid(maxWidth: 1024) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  const festivalPics = data.festivalGalleryImgs.nodes;

  const festivalGallOptions = {
    settings: {
      overlayColor: ' #3e7520',
      autoplaySpeed: 4500,
      transitionSpeed: 2000,
    },
    caption: {
      showCaption: false,
    },
  };
  return (
    <Layout>
      <FestivalGallStyles>
        <SEO
          title="Festival"
          keywords={['music', 'fame festival', 'Barbados', 'community']}
        />
        <Container>
          <h1 className="title">Festival</h1>
          <BrushStroke />
          <div className="festival--text-wrapper">
            <div className="under_title">
              <h2>FAME FESTIVAL _ BE PART OF A UNIQUE EXPERIENCE _</h2>
              <h2>DEDICATED TO FOOD ART MUSIC AND THE ENVIRONMENT </h2>
            </div>
            <p className="paragraphTexts">
              FAME team invites you to events where you can relax and enjoy a
              gathering using all your senses. FAME stands for FOOD, ART, MUSIC
              and ENVIRONMENT, the main topics of our events. Savour healthy,
              fresh and local food and drinks with respect for the environment.
              Participate in art workshops, enjoy sports activities and art
              displayed alongside joyful music performances. Line up joining
              Caribbean musicians with internationally known acts like Lee
              Scratch Perry godfather of the first edition we made. Enjoy both
              the inner and outer environment, with time slots where yoga
              sessions, lectures on nature and health practitioners propose mini
              consults (massages...) will happen!
            </p>
          </div>
          <div className="gallery-wrapper">
            <SRLWrapper options={festivalGallOptions}>
              <div className="image-grid">
                {festivalPics.map((festivalImg) => (
                  <div className="image-item" key={festivalImg.id}>
                    <Img
                      fluid={festivalImg.image.asset.fluid}
                      alt={`${festivalImg.name} - F.A.M.E Festival`}
                      className="gallery-img"
                    />
                  </div>
                ))}
              </div>
            </SRLWrapper>
          </div>
        </Container>
      </FestivalGallStyles>
    </Layout>
  );
}
