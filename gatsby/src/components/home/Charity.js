import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BrushStroke from '../BrushStroke';

const CharityStyles = styled.div`
  .charity-card {
    width: 360px;
    height: 450px;
    margin: 20px auto;
    position: relative;
    background: white;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
    transition: all 0.3s linear;
    border-radius: 4px;
  }

  .charity-card:hover {
    box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  }

  .charity-card:hover .thumbnail img {
    opacity: 0.6;
  }

  .charity_logo {
    width: 250px;
    height: auto;
    margin: auto;
  }

  .charity-card-content {
    position: absolute;
    max-height: 450px;
    bottom: 0;
    background: white;
    padding: 20px 30px;
    transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  .charity-card-title {
    margin: 0 auto;
    padding: 0 0 10px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }
  .charity-card-sub_title {
    margin: 0;
    padding: 0 0 20px;
    color: var(--darkGreen);
    font-size: 16px;
    text-align: center;
    font-weight: lighter;
    line-height: 1.2;
  }

  .hidden-box {
    overflow: hidden;
    position: relative;
    max-height: 0;
    color: #666666;
    font-size: 18px;
    line-height: 1.8em;
    transition: max-height 0.5s linear;
  }
  .charity-card:hover .hidden-box {
    max-height: 450px;
  }

  .charity-card-description {
    text-align: justify;
    padding: 10px;
    font-size: 14px;
    line-height: 1.7;
    margin: 0;
  }

  .donate {
    margin: 20px auto;
    text-align: center;
    width: fit-content;
  }

  .charity-donate-btn {
    padding: 1rem 3rem;
    background: var(--darkGreen);
    text-transform: uppercase;
    border-radius: 4px;
    box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.3);
    font-size: 16px;
    color: white;
  }
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
              fluid(maxHeight: 250) {
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
        <div className="charity-card">
          <div className="thumbnail">
            <Img
              fluid={charity.image.asset.fluid}
              alt={charity.name}
              className="charity_logo"
              key={charity.id}
            />
          </div>
          <div className="charity-card-content">
            <h3 className="charity-card-title">{charity.NpoName}</h3>
            <p className="charity-card-sub_title">{charity.NpoDesc}</p>
            <div className="donate">
              <a
                className="charity-donate-btn"
                href={charity.NpoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </div>
            <div className="hidden-box">
              <p className="charity-card-description">{charity.charityEvent}</p>
            </div>
          </div>
        </div>
      ))}
    </CharityStyles>
  );
}
