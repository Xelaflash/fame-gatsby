import React from 'react';
// import styled from 'styled-components';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';

export default function food() {
  const bannerImgUrl = 'https://picsum.photos/200/300';
  return (
    <>
      <SEO title="Food" />
      <HeroBanner pageTitle="Food" bannerImg={bannerImgUrl} />
    </>
  );
}
