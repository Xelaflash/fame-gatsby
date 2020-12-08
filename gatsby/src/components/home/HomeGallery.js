import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { SRLWrapper } from 'simple-react-lightbox';
import styled from 'styled-components';
import BrushStroke from '../BrushStroke';

const HomeGalleryStyles = styled.div`
  text-align: center;
  .image-grid {
    display: grid;
    grid-gap: 1rem;
    justify-items: center;
    margin: 0;
    padding: 0;
  }
  .image-grid .image-item:nth-child(5n) {
    grid-column-end: span 2;
  }
  .image-item {
    width: 100%;
    height: 100%;
  }

  .gallery-img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0px 15px 15px rgb(0, 0, 0, 0.4);
    cursor: pointer;
    transition: opacity 0.25s ease-in-out;
    &:hover {
      opacity: 0.9;
    }
  }

  @media (min-width: 576px) {
    .image-grid {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
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
                aspectRatio
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
      autoplaySpeed: 1500,
      transitionSpeed: 900,
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
