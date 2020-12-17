import path from 'path';

async function turnRecipesIntoPages({ graphql, actions }) {
  const recipeTemplate = path.resolve('./src/templates/RecipeTemplate.js');
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
  data.recipes.nodes.forEach((recipe) => {
    actions.createPage({
      path: `/recipe/${recipe.slug.current}`,
      component: recipeTemplate,

      context: {
        slug: recipe.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([turnRecipesIntoPages(params)]);
}
