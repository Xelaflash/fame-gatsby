import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import BrushStroke from '../BrushStroke';

const PartnersStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: -20px auto 40px auto;
  .gatsby-image-wrapper {
    height: auto;
    width: 180px;
    margin: 10px;
  }
`;

export default function Partners() {
  const data = useStaticQuery(graphql`
    query {
      partnersLogo: allSanityPartners {
        nodes {
          id
          name
          image {
            asset {
              fluid(maxWidth: 200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  const partnersLogo = data.partnersLogo.nodes;
  return (
    <>
      <h2 className="title">Our partners</h2>
      <BrushStroke />
      <PartnersStyles>
        {partnersLogo.map((partner) => (
          <Img
            fluid={partner.image.asset.fluid}
            alt={partner.name}
            className=""
            key={partner.id}
          />
        ))}
      </PartnersStyles>
    </>
  );
}
