import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { MdPersonOutline } from 'react-icons/md';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/RecipeHeaderStyles.scss';

const RecipesGridStyles = styled.div`
  margin: 20px auto 40px auto;
  cursor: grab;

  .slick-track {
    display: flex;
    align-items: stretch;
  }
  .slick-prev {
    left: -50px;
  }
  .slick-next {
    right: -45px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
  }

  @media (max-width: 660px) {
    .slick-arrow {
      display: none !important;
    }
  }
`;

const RecipeStyles = styled.div`
  margin: 20px auto;
  width: 320px;
  background: var(--white);
  /* box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.3); */
  border-radius: 4px;

  .recipe_pic {
    height: 200px;
    width: auto;
    box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }
  .recipe_card_content {
    padding: 20px;
    .chef_link:hover {
      text-decoration: underline;
    }
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
      <div className="food-card">
        <Img
          fluid={recipe.image.asset.fluid}
          alt={recipe.name}
          className="recipe_pic"
        />
        <div className="recipe_card_content">
          <h4>{recipe.name}</h4>
          <Link
            to={`/community/${recipe.creator.slug.current}`}
            className="chef_link"
          >
            <span className="creator_name">{recipe.creator.name}</span>
          </Link>
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
      </div>
    </RecipeStyles>
  );
}

export default function RecipeSlider({ recipes }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    initialSlide: 0,
    swipeToSlide: true,
    // className: 'center',
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <RecipesGridStyles>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <SingleRecipe key={recipe.id} recipe={recipe} />
          </div>
        ))}
      </Slider>
    </RecipesGridStyles>
  );
}
