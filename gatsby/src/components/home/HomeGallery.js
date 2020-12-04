import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
  .image-grid img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0px 15px 15px rgb(0, 0, 0, 0.4);
    cursor: pointer;
    transition: opacity 0.25s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
  @media (min-width: 576px) {
    .image-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
`;

const HomeGallery = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryImages {
      allCloudinaryMedia(filter: { public_id: { glob: "cloudinaryImg/*" } }) {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `);

  const clImages = data.allCloudinaryMedia.edges;

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
            {clImages.map((image, index) => (
              <div className="image-item" key={`${index}-cl`}>
                <img
                  src={image.node.secure_url}
                  alt="F.A.M.E - Festival pictures"
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
