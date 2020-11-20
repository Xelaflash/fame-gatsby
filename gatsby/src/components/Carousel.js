import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const CarouselStyle = styled.div`
  margin: 0 auto 50px;
  max-width: 850px;
  .carousel .carousel-inner {
    border-radius: 3px;
    box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.8);
  }
  .carousel-item > img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

export default function CarouselWrapper() {
  const data = useStaticQuery(graphql`
    query {
      carouselPics: allSanityHomepagePics {
        nodes {
          id
          name
          image {
            asset {
              fluid(maxWidth: 800, maxHeight: 450) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  const pics = data.carouselPics.nodes;

  return (
    <CarouselStyle>
      <Carousel
        showArrows="true"
        controls="true"
        justify-self="end"
        align-self="center"
        control-prev-icon-color="invert(100%)"
        control-next-icon-color="invert(100%)"
      >
        {pics.map((pic) => (
          <Carousel.Item>
            <Img
              fluid={pic.image.asset.fluid}
              alt={pic.name}
              className="d-block w-100 mx-auto"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselStyle>
  );
}
