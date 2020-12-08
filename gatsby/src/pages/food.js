import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';
import BrushStroke from '../components/BrushStroke';
import Quote from '../components/home/Quote';

const FoodStyles = styled.div`
  p {
    margin: 20px auto;
    width: 90%;
  }
  .growing {
    margin: 0 auto 40px auto;
    text-align: center;
  }
  .food_vid_wrapper {
    border: 2px solid red;
    margin: 0 auto 20px auto;
    height: 350px;
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
      quote3: sanityQuotes(quoteId: { eq: "Quote3" }) {
        quoteText
      }
    }
  `);
  const bannerImg = data.bannerImg.image.asset.fluid;
  return (
    <FoodStyles>
      <SEO
        title="Food"
        keywords={[
          'chef',
          'organic',
          'restaurant',
          'ecological',
          'sustainable',
          'home-grown',
          'Barbados',
          'Bajan',
        ]}
      />
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
      <div className="growing">
        <h2 className="title">Growing</h2>
        <BrushStroke />
        <p>
          Barbados is still very dependent on food coming from overseas. We feel
          it is important to support all the local initiatives that are
          promoting food growing especially the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Permaculture"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="permaculture definition"
            className="text-link"
          >
            permaculture
          </a>{' '}
          initiatives. Our partner Slow Food has started{' '}
          <a
            href="https://www.slowfoodbarbados.org/education-gardens/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Slow Food Barbados - Education gardens"
            className="text-link"
          >
            education gardens
          </a>{' '}
          to reconnect children with food.
        </p>
        <div className="food_vid_wrapper">video to come here</div>
        <a
          href="#"
          aria-label="Fame Weekly talk links - FOOD"
          className="text-link"
        >
          Put link to weekly talk tagged Food
        </a>
      </div>
      <div className="preparing">
        <h2 className="title">Preparing</h2>
        <BrushStroke />
        <p>
          It is a pleasure to select organically grown ingredients to prepare a
          wholesome and healthy meal. Local farmers have food items made with
          love, share in this love by sourcing your ingredients from them. Now
          it is time for you to be creative and make a meal or drink. If you
          want to be inspired please check one of the recipes we find delicious
          on our{' '}
          <a
            href="https://www.instagram.com/famefestival_worldwide/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram - FAME"
            className="text-link"
          >
            Instagram
          </a>{' '}
          page.
        </p>
      </div>
      <Quote quote={data.quote3} />
    </FoodStyles>
  );
}
