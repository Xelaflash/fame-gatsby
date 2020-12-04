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
              fixed(width: 140) {
                ...GatsbySanityImageFixed
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
            fixed={partner.image.asset.fixed}
            alt={partner.name}
            className=""
            key={partner.id}
          />
        ))}
      </PartnersStyles>
    </>
  );
}
