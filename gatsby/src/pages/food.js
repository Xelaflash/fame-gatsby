import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';

const FoodStyles = styled.div`
  p {
    margin: 60px auto 20px auto;
    width: 90%;
  }
`;

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
    <FoodStyles>
      <SEO title="Food" />
      <HeroBanner pageTitle="Food" bannerImg={bannerImg} />
      <div>
        <p>
          FOOD is an essential part of everyone’s lives. Its nutrients offer the
          energy to grow and develop the body and mind. Good nutrition is
          health, it allows us to move, think, and learn. While there are plenty
          of foods around us, many don’t know the importance of local, fresh,
          organic produce and their benefits. The ‘We Love F.A.M.E. Team’
          believe « you are what you eat » food is medicine; we are standing up
          for a conscious alimentation respectful of our planet. The world
          produces enough food, but its distribution is unfair. Every five
          seconds a child dies of malnutrition, and over 800 million people will
          go to bed hungry tonight. We assert that permaculture, sustainable
          growing, and healthy recipes can end starvation, malnutrition and
          disease. This is why the ‘We Love F.A.M.E. Team’ is promoting food
          awareness within our community. We are HUNGRY for change.
        </p>
      </div>
    </FoodStyles>
  );
}
