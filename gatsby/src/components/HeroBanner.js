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
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2));
  box-shadow: inset 0px 0px 10px 0 rgba(0, 0, 0, 0.9);
  /* for placing of the h1 */
  display: flex;
  align-items: flex-end;
  h1 {
    color: var(--white);
    font-size: 8rem;
    margin: 100px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 1);
  }
`;

export default StyledBackgroundSection;
