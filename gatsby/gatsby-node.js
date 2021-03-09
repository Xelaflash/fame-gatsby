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
      path: `/food/${recipe.slug.current}`,
      component: recipeTemplate,

      context: {
        slug: recipe.slug.current,
      },
    });
  });
}
async function turnCommunityMemberIntoPages({ graphql, actions }) {
  const communityMemberTemplate = path.resolve(
    './src/templates/CommunityMemberTemplate.js'
  );
  const { data } = await graphql(`
    query {
      commMembers: allSanityCommunityMember {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.commMembers.nodes.forEach((commMember) => {
    actions.createPage({
      path: `/community/${commMember.slug.current}`,
      component: communityMemberTemplate,

      context: {
        slug: commMember.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([
    turnRecipesIntoPages(params),
    turnCommunityMemberIntoPages(params),
  ]);
}
