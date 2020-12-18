import React, { useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { MdPersonOutline } from 'react-icons/md';
import { Link } from 'gatsby';
import Glide from '@glidejs/glide';
import '../../styles/styles.scss';

const RecipesGridStyles = styled.div`
  margin: 0 auto 40px auto;
  width: 90%;
`;

const RecipeStyles = styled.div`
  margin: 10px 5px;
  width: 320px;
  background: var(--white);
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  .recipe_pic {
    height: 200px;
    box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }
  .recipe_card_content {
    padding: 20px;
    h4 {
      font-size: 2.3rem;
      font-family: var(--body-font);
      font-weight: bold;
      letter-spacing: 1px;
    }
    .creator_name {
      font-size: 16px;
      font-weight: lighter;
      color: #808080;
      padding-left: 5px;
    }
    .separator_grey {
      border-top: 1px solid #c0c0c0;
    }
    .recipe_header {
      display: flex;
      padding-bottom: 1em;
      margin: 0;
      justify-content: space-between;
    }
    .recipe_details_items_top {
      text-align: center;
    }
    .value {
      font-size: 20px;
      color: #ff4f87;
      font-weight: bolder;
    }
    .unit {
      margin: -4px 0 10px 5px;
      font-weight: lighter;
      width: 100%;
      letter-spacing: 2px;
      font-size: 16px;
    }
    .recipe_link {
      text-align: center;
    }
    .recipe_button {
      text-transform: uppercase;
      padding: 1rem 3rem;
      background: #ff4f87;
      text-transform: uppercase;
      border-radius: 4px;
      width: 80%;
      border: none;
      box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.3);
      &:hover {
        opacity: 0.9;
      }
      a {
        color: white;
        font-size: 18px;
      }
    }
  }
`;

function SingleRecipe({ recipe }) {
  return (
    <RecipeStyles>
      <Img
        fluid={recipe.image.asset.fluid}
        alt={recipe.name}
        className="recipe_pic"
      />
      <div className="recipe_card_content">
        <h4>{recipe.name}</h4>
        {/* TODO: put link to creator card in community page */}
        <span className="creator_name">{recipe.creator.name}</span>
        <hr className="separator_grey" />
        <div className="recipe_header">
          <div className="recipe_details_items">
            <div className="recipe_details_items_top">
              <AiOutlineClockCircle
                size="25px"
                style={{ marginRight: '10px', marginTop: '-8px' }}
              />
              <span className="value">{recipe.prepTime}</span>
            </div>
            <p className="unit">Minutes</p>
          </div>
          <div className="recipe_details_items">
            <div className="recipe_details_items_top">
              <BsBook
                size="25px"
                style={{ marginRight: '10px', marginTop: '-8px' }}
              />
              <span className="value">{recipe.ingredients.length}</span>
            </div>
            <p className="unit">Ingredients</p>
          </div>
          <div className="recipe_details_items">
            <div className="recipe_details_items_top">
              <MdPersonOutline
                size="25px"
                style={{ marginRight: '10px', marginTop: '-8px' }}
              />
              <span className="value">{recipe.servings}</span>
            </div>
            <p className="unit">Servings</p>
          </div>
        </div>
        <div className="recipe_link">
          <button type="button" className="recipe_button">
            <Link to={`/recipe/${recipe.slug.current}`}>View recipe</Link>
          </button>
        </div>
      </div>
    </RecipeStyles>
  );
}

export default function RecipeList({ recipes }) {
  useEffect(() => {
    const slider = document.querySelector('.glide');
    if (slider) {
      const glide = new Glide(slider, {
        focusAt: 'center',
        perView: 3,
        type: 'carousel',
      });
      glide.mount();
    }
  }, []);

  return (
    <RecipesGridStyles>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {recipes.map((recipe) => (
              <li className="glide__slide" key={recipe.id}>
                <SingleRecipe key={recipe.id} recipe={recipe} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </RecipesGridStyles>
  );
}
