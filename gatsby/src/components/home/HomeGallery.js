import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { SRLWrapper } from 'simple-react-lightbox';
import styled from 'styled-components';
import BrushStroke from '../BrushStroke';

const HomeGalleryStyles = styled.div`
  text-align: center;
`;

const HomeGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      galleryImgs: allSanityHomeGallery {
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
  const pics = data.galleryImgs.nodes;

  const options = {
    settings: {
      overlayColor: '#fea433',
      autoplaySpeed: 4500,
      transitionSpeed: 2000,
    },
    caption: {
      showCaption: false,
    },
  };

  return (
    <>
      <HomeGalleryStyles>
        <h2 className="title ">A glimpse at the pasts Festivals</h2>
        <BrushStroke />
        <SRLWrapper options={options}>
          <div className="image-grid">
            {pics.map((image, index) => (
              <div className="image-item" key={`${index}`}>
                <Img
                  fluid={image.image.asset.fluid}
                  alt={`${image.name} - F.A.M.E Festival`}
                  className="gallery-img"
                />
              </div>
            ))}
          </div>
        </SRLWrapper>
      </HomeGalleryStyles>
    </>
  );
};

export default HomeGallery;
