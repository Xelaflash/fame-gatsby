import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BrushStroke from '../BrushStroke';

const CharityStyles = styled.div`
  .charity-card_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1rem;
    justify-items: center;
  }

  .charity-card {
    width: 370px;
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

  .thumbnail {
    text-align: center;
    padding: 10px;
  }

  .charity-card-content {
    position: absolute;
    max-height: 450px;
    bottom: 0;
    background: white;
    padding: 20px;
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
    height: 0;
    color: #666666;
    transition: height 0.4s linear;
  }
  .charity-card:hover .hidden-box {
    height: 250px;
    overflow: auto;
  }

  .charity-card-description {
    text-align: justify;
    max-height: 240px;
    font-size: 14px;
    line-height: 1.5;
    margin: 10px auto 0 auto;
    padding: 0 10px;
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
              fixed(width: 200) {
                ...GatsbySanityImageFixed
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
      <div className="charity-card_grid">
        {charities.map((charity) => (
          <div className="charity-card">
            <div className="thumbnail">
              <Img
                fixed={charity.image.asset.fixed}
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
                <p className="charity-card-description">
                  {charity.charityEvent}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CharityStyles>
  );
}
