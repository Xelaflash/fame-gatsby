import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BrushStroke from '../BrushStroke';

const CharityStyles = styled.div`
  border: 1px solid red;
`;

export default function Charity() {
  const data = useStaticQuery(graphql`
    query {
      charities: allSanityCharity {
        nodes {
          id
          NpoName
          NpoDesc
          NpoLink
          charityEvent
          image {
            asset {
              fluid(maxWidth: 250) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  const charities = data.charities.nodes;

  return (
    <CharityStyles>
      <h2 className="title">CHARITY EVENTS</h2>
      <BrushStroke />
      {charities.map((charity) => (
        <div className="charities">
          <p>{charity.NpoName}</p>
          <Img
            fluid={charity.image.asset.fluid}
            alt={charity.name}
            className="charity_logo"
            key={charity.id}
          />
          <p>{charity.NpoDesc}</p>
          <p>{charity.charityEvent}</p>
          <a href={charity.NpoLink} target="_blank" rel="noopener noreferrer">
            Donate
          </a>
        </div>
      ))}
    </CharityStyles>
  );
}
