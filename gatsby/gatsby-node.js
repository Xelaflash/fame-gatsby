import path from 'path';
// import fetch from 'isomorphic-fetch';

async function turnRecipesIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const recipeTemplate = path.resolve('./src/templates/RecipeTemplate.js');
  // 2. query all recipes (via node API)
  const { data } = await graphql(`
    query {
      recipes: allSanityRecipe {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  console.log(data);
  // 3. loop over each pizza and create a page for that pizza
  data.recipes.nodes.forEach((recipe) => {
    actions.createPage({
      // specify the URL for the page
      path: `/recipe/${recipe.slug.current}`,
      component: recipeTemplate,
      // in order to pass data from this createPage method to the actual template you need context
      context: {
        slug: recipe.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // wait for all promises to be resolved before finishing them all
  await Promise.all([turnRecipesIntoPages(params)]);
}
