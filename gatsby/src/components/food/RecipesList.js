import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, Link, useStaticQuery } from 'gatsby';

function SingleRecipe({ recipe }) {
  return (
    <>
      <p>i'M one recipe</p>
    </>
  );
}

export default function RecipeList({ recipes }) {
  return (
    <>
      <p>I'm a recipe grid</p>
    </>
  );
}
