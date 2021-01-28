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
          <div className="wrapper">
            <p className="paragraphTexts">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              eos, laborum veniam neque deserunt dignissimos est unde ducimus
              dolorem beatae, laudantium ipsum. Eaque, cum ipsa assumenda
              excepturi ea in asperiores!Sequi mollitia deleniti atque ut
              accusantium temporibus officia nobis! Repudiandae officiis
              asperiores odit mollitia maxime, possimus excepturi magnam quas
              similique beatae eaque obcaecati perspiciatis. Sit nam iure
              nostrum est unde.
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
