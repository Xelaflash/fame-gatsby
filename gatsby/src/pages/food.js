import React from 'react';
// import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';

export default function Food() {
  const data = useStaticQuery(graphql`
    query {
      bannerImg: sanityBannerImgs(name: { eq: "food" }) {
        id
        name
        image {
          asset {
            fluid(maxWidth: 1920) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `);
  const bannerImg = data.bannerImg.image.asset.fluid;
  return (
    <>
      <SEO title="Food" />
      <HeroBanner pageTitle="Food" bannerImg={bannerImg} />
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
          accusantium facilis! Vero suscipit deleniti asperiores ab quos in eius
          consequuntur quisquam nulla voluptate, illum accusantium ipsam,
          inventore earum vitae cum. Nesciunt ex dolor earum possimus soluta id
          corrupti vel tempore, ab autem odit ipsa, fuga culpa corporis rem, ea
          nam perspiciatis reprehenderit voluptatum! Eaque eveniet vitae
          necessitatibus, libero fugit cupiditate! Fuga, laborum facere.
          Cupiditate mollitia praesentium blanditiis ducimus, veniam, eius in
          expedita voluptatum aliquid debitis excepturi odit quas officiis rem
          iusto ex distinctio suscipit nesciunt! Facere odio sit dolorum aut!
          Iste laudantium labore earum enim exercitationem a sunt assumenda
          blanditiis ullam eius atque ratione hic voluptas ex molestiae cumque
          quasi commodi laboriosam quos at quae sequi, corrupti voluptatem.
          Eaque, et.
        </p>
      </div>
    </>
  );
}
