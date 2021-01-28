import React, { useEffect } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';
import BrushStroke from '../components/BrushStroke';
import Quote from '../components/home/Quote';
import Layout from '../components/Layout';
import RecipeSlider from '../components/food/RecipesList';
import FamePeople from '../components/FamePeople';

const FoodStyles = styled.div`
  .growing {
    margin: 0 auto 40px auto;
    text-align: center;
  }
  .food_vid_wrapper {
    border: 2px solid red;
    margin: 0 auto 20px auto;
    height: 350px;
  }
  .recipes {
    margin: 0 auto 40px auto;
    text-align: center;
    h3 {
      color: white;
      font-size: 4rem;
      margin: 20px auto 0 auto;
      text-decoration: underline;
    }
  }
`;

export default function FoodPage({ data }) {
  const bannerImg = data.bannerImg.image.asset.fluid;
  const recipes = data.recipes.nodes;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Layout>
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
        <Container>
          <div>
            <p className="paragraphTexts">
              FOOD is an essential part of everyone’s lives. Its nutrients offer
              the energy to grow and develop the body and mind. Good nutrition
              is health, it allows us to move, think, and learn. While there are
              plenty of foods around us, many don’t know the importance of
              local, fresh, organic produce and their benefits. The ‘We Love
              F.A.M.E. Team’ believe « you are what you eat » food is medicine;
              we are standing up for a conscious alimentation respectful of our
              planet. The world produces enough food, but its distribution is
              unfair. Every five seconds a child dies of malnutrition, and over
              800 million people will go to bed hungry tonight. We assert that
              permaculture, sustainable growing, and healthy recipes can end
              starvation, malnutrition and disease. This is why the ‘We Love
              F.A.M.E. Team’ is promoting food awareness within our community.
              We are HUNGRY for change.
            </p>
          </div>
          <section className="growing">
            <h2 className="title">Growing</h2>
            <BrushStroke />
            <p className="paragraphTexts">
              Barbados is still very dependent on food coming from overseas. We
              feel it is important to support all the local initiatives that are
              promoting food growing especially the{' '}
              <a
                href="https://en.wikipedia.org/wiki/Permaculture"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="permaculture definition"
                className="underline_svg link_white"
              >
                permaculture
              </a>{' '}
              initiatives. Our partner Slow Food has started{' '}
              <a
                href="https://www.slowfoodbarbados.org/education-gardens/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Slow Food Barbados - Education gardens"
                className="underline_svg link_white"
              >
                education gardens
              </a>{' '}
              to reconnect children with food.
            </p>
            <div className="food_vid_wrapper">video to come here</div>
            <a
              href="#"
              aria-label="Fame Weekly talk links - FOOD"
              className="underline_svg link_white"
            >
              Put link to weekly talk tagged Food
            </a>
          </section>
          <section className="preparing">
            <h2 className="title">Preparing</h2>
            <BrushStroke />
            <p className="paragraphTexts">
              It is a pleasure to select organically grown ingredients to
              prepare a wholesome and healthy meal. Local farmers have food
              items made with love, share in this love by sourcing your
              ingredients from them. Now it is time for you to be creative and
              make a meal or drink. If you want to be inspired please check one
              of the recipes we find delicious on our{' '}
              <a
                href="https://www.instagram.com/famefestival_worldwide/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram - FAME"
                className="underline_svg link_white"
              >
                Instagram
              </a>{' '}
              page.
            </p>
            <Quote quote={data.quote3} />
            <div className="recipes">
              <h3>Recipes</h3>
              <RecipeSlider recipes={recipes} />
            </div>
          </section>
          <FamePeople communityMembers={data.chefs.nodes} jobTitle="chefs" />
        </Container>
      </FoodStyles>
    </Layout>
  );
}

export const query = graphql`
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
      quoteAuthor
    }
    recipes: allSanityRecipe {
      nodes {
        id
        slug {
          current
        }
        image {
          asset {
            fluid(maxHeight: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        name
        prepTime
        servings
        ingredients
        recipeSteps
        creator {
          name
        }
      }
    }
    chefs: allSanityCommunityMember(
      filter: { category: { category: { eq: "Food" } } }
    ) {
      nodes {
        name
        image {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
