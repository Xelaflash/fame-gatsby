import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const HeroBanner = ({ pageTitle, bannerImg, className }) => (
  <BackgroundImage
    Tag="section"
    fluid={bannerImg}
    backgroundColor="#040e18"
    className={className}
  >
    <h1>{pageTitle}</h1>
  </BackgroundImage>
);
const StyledBackgroundSection = styled(HeroBanner)`
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.7);

  /* for placing of the h1 */
  display: flex;
  align-items: flex-end;
  h1 {
    color: var(--white);
    font-size: 8rem;
    margin: 100px 0 100px 100px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 1);
  }
  @media (max-width: 812px) {
    h1 {
      font-size: 5rem;
      margin: 50px 0 50px 10px;
    }
  }
`;

export default StyledBackgroundSection;
