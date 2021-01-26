import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { MdPersonOutline } from 'react-icons/md';
import { Container } from 'react-bootstrap';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import '../styles/RecipeHeaderStyles.scss';
import BrushStroke from '../components/BrushStroke';

const RecipePageStyle = styled.div`
  h4 {
    color: white;
    text-decoration: underline;
    letter-spacing: 1px;
    font-size: 28px;
    margin-bottom: 20px;
  }

  .recipe_creator {
    color: var(--white);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
    font-weight: lighter;
    letter-spacing: 1px;
  }

  #single_recipe {
    color: white;
    margin: 20px auto 0;
    padding: 10px;
  }
  @media (min-width: 768px) {
    #single_recipe {
      width: 55%;
    }
  }
  .single_recipe_value {
    color: var(--darkGreen);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
    font-size: 24px;
  }
  .single_recipe_unit {
    font-size: 20px;
  }
  .recipe_img {
    max-width: 800px;
    max-height: 600px;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 20px 30px -10px;
    .gatsby-image-wrapper {
      border-radius: 4px;
      height: 400px;
    }
  }

  .recipe_title {
    font-size: 3em;
    margin-top: 40px;
    color: white;
  }
  .centered {
    text-align: center;
  }
  .recipe_content {
    font-size: 18px;
  }
  .recipe_ingredients {
    margin: 40px auto;
    width: 80%;
    ul {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      margin: auto;
    }
  }
  .recipe_steps {
    margin: 40px auto;
    width: 80%;
    font-size: 18px;
    line-height: 1.8;
    li {
      margin: 10px auto;
    }
  }
`;

export default function SingleRecipePage({ data: { recipe } }) {
  return (
    <Layout>
      <SEO title={recipe.name} image={recipe.image?.asset?.fluid?.src} />
      <Container>
        <RecipePageStyle>
          <h1 className="recipe_title centered">{recipe.name}</h1>
          <BrushStroke />
          <div className="recipe_creator centered">
            {/* TODO: put link to creator card in community page */}
            <Img
              fluid={recipe.creator.image.asset.fluid}
              alt={recipe.creator.name}
              className="avatar"
            />
            By {recipe.creator.name}
          </div>
          <div className="recipe_header centered" id="single_recipe">
            <div className="recipe_details_items">
              <div className="recipe_details_items_top">
                <AiOutlineClockCircle
                  size="30px"
                  style={{ marginRight: '10px', marginTop: '-8px' }}
                />
                <span className="value single_recipe_value">
                  {recipe.prepTime}
                </span>
              </div>
              <p className="unit single_recipe_unit">Minutes</p>
            </div>
            <div className="recipe_details_items">
              <div className="recipe_details_items_top">
                <BsBook
                  size="30px"
                  style={{ marginRight: '10px', marginTop: '-8px' }}
                />
                <span className="value single_recipe_value">
                  {recipe.ingredients.length}
                </span>
              </div>
              <p className="unit single_recipe_unit">Ingredients</p>
            </div>
            <div className="recipe_details_items">
              <div className="recipe_details_items_top">
                <MdPersonOutline
                  size="30px"
                  style={{ marginRight: '10px', marginTop: '-8px' }}
                />
                <span className="value single_recipe_value">
                  {recipe.servings}
                </span>
              </div>
              <p className="unit single_recipe_unit">Servings</p>
            </div>
          </div>
          <div className="recipe_img">
            <Img fluid={recipe.image.asset.fluid} alt={recipe.name} />
          </div>
          <div className="recipe_ingredients">
            <h4>Ingredients</h4>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="recipe_steps">
            <h4>Preparation</h4>
            <ul>
              {recipe.recipeSteps.map((step) => (
                <li>{step}</li>
              ))}
            </ul>
          </div>
        </RecipePageStyle>
      </Container>
    </Layout>
  );
}

// this query needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  # slug variable is coming from gatsby-node context
  query($slug: String!) {
    recipe: sanityRecipe(slug: { current: { eq: $slug } }) {
      id
      name
      prepTime
      servings
      ingredients
      recipeSteps
      creator {
        name
        image {
          asset {
            fluid(maxHeight: 600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }

      image {
        asset {
          fluid(maxHeight: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
