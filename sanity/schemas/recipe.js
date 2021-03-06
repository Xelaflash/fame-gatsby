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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Recipe picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'servings',
      title: 'Number of people',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'prepTime',
      title: 'Preparation Time',
      description: 'in minutes',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ingredients',
      title: 'Ingredients & doses',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'recipeSteps',
      title: 'Recipe Steps',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'creator',
      title: 'Creator of the recipe',
      type: 'reference',
      to: [{ type: 'communityMember' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: '100',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
