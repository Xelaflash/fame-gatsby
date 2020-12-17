import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { MdPersonOutline } from 'react-icons/md';
import SEO from '../components/SEO';

const RecipePageStyle = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  .centered {
    margin: 0 auto;
  }
`;

export default function SingleRecipePage({ data: { recipe } }) {
  return (
    <>
      <SEO title={recipe.name} image={recipe.image?.asset?.fluid?.src} />
      <RecipePageStyle>
        <Img fluid={recipe.image.asset.fluid} alt={recipe.name} />
        <div className="centered">
          <h2 className="mark">{recipe.name}</h2>
          <hr />
          <div className="recipe_header">
            <AiOutlineClockCircle />
            <span>{recipe.prepTime} min</span>
            <BsBook />
            <span>{recipe.ingredients.length} Ingredients</span>
            <MdPersonOutline />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="recipe_body">
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
          </div>
        </div>
      </RecipePageStyle>
    </>
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
      }

      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
