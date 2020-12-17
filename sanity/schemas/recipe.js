import { FaCarrot as icon } from 'react-icons/fa';

export default {
  name: 'recipe',
  title: 'Recipes',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Recipe Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Recipe picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'servings',
      title: 'Number of people',
      type: 'number',
    },
    {
      name: 'prepTime',
      title: 'Preparation Time',
      description: 'in minutes',
      type: 'number',
    },
    {
      name: 'ingredients',
      title: 'Ingredients & doses',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'recipeSteps',
      title: 'Recipe Steps',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'creator',
      title: 'Creator of the recipe',
      type: 'reference',
      to: [{ type: 'communityMember' }],
    },
  ],
};
