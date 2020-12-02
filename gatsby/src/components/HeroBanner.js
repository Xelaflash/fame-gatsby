import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const HeroBanner = ({ pageTitle, bannerImg, className }) => (
  <BackgroundImage
    Tag="section"
    fluid={bannerImg}
    className={className}
    preserveStackingContext
  >
    <h1>{pageTitle}</h1>
  </BackgroundImage>
);
const StyledBackgroundSection = styled(HeroBanner)`
  height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* To override bootstrap container */
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
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
