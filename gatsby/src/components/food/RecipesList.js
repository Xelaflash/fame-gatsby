import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { MdPersonOutline } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Glide, {
  Breakpoints,
  Swipe,
  Controls,
} from '@glidejs/glide/dist/glide.modular.esm';
import '../../styles/SliderStyles.scss';
import '../../styles/RecipeHeaderStyles.scss';

const RecipesGridStyles = styled.div`
  margin: 0 auto 40px auto;

  .glide__arrows {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 40px auto -10px auto;
  }
  .glide__arrow {
    border-radius: 50%;
    padding: 10px;
    position: relative;
  }
`;

const RecipeStyles = styled.div`
  margin: 20px auto;
  width: 320px;
  background: var(--white);
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  .recipe_pic {
    height: 200px;
    width: auto;
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
            <Link to={`/food/${recipe.slug.current}`}>View recipe</Link>
          </button>
        </div>
      </div>
    </RecipeStyles>
  );
}

const sliderConfig = {
  type: 'carousel',
  gap: 10,
  perView: 4,
  breakpoints: {
    700: {
      perView: 1,
    },
    900: {
      perView: 2,
    },
    1100: {
      perView: 3,
    },
  },
};

export default function RecipeList({ recipes }) {
  const ref = useRef();
  useEffect(() => {
    const slider = document.querySelector('.glide');
    const glide = new Glide(ref.current, sliderConfig);
    if (slider) {
      glide.mount({ Breakpoints, Swipe, Controls });
    }
  }, [ref]);

  return (
    <RecipesGridStyles>
      <div className="glide" ref={ref}>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            type="button"
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            <FaArrowLeft />
          </button>
          <button
            type="button"
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <FaArrowRight />
          </button>
        </div>
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
