import React from 'react';
import styled from 'styled-components';

const HeroBannerStyles = styled.div`
  border: 1px solid red;
`;

export default function HeroBanner({ pageTitle, bannerImg }) {
  return (
    <HeroBannerStyles>
      <h1>{pageTitle}</h1>
      <img src={bannerImg} alt={`FAME ${pageTitle} banner`} />
    </HeroBannerStyles>
  );
}
