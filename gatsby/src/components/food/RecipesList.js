import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { MdPersonOutline } from 'react-icons/md';
import { Link } from 'gatsby';

const RecipesGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 300px;
`;

const RecipeStyles = styled.div`
  border: 1px solid red;
`;

function SingleRecipe({ recipe }) {
  return (
    <RecipeStyles>
      <Link to={`/recipe/${recipe.slug.current}`}>
        <Img fixed={recipe.image.asset.fixed} alt={recipe.name} />
      </Link>
      <h3>{recipe.name}</h3>
      <hr />
      <div className="recipe_header">
        <AiOutlineClockCircle />
        <span>{recipe.prepTime} min</span>
        <BsBook />
        <span>{recipe.ingredients.length} Ingredients</span>
        <MdPersonOutline />
        <span>{recipe.servings} servings</span>
      </div>
    </RecipeStyles>
  );
}

export default function RecipeList({ recipes }) {
  return (
    <RecipesGridStyles>
      {recipes.map((recipe) => (
        <SingleRecipe key={recipe.id} recipe={recipe} />
      ))}
    </RecipesGridStyles>
  );
}
