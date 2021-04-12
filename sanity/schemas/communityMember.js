import { IoIosPeople as icon } from 'react-icons/io';

export default {
  // Computer name
  name: 'communityMember',
  // visible name
  title: 'Data for FAME community member',
  type: 'document',
  icon,
  fieldsets: [
    { name: 'communityMember', title: 'Data for FAME community member' },
  ],
  fields: [
    {
      name: 'name',
      title: 'Member Name',
      type: 'string',
      fieldset: 'communityMember',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        // permet de sélectionner une zone de la photo pour le cropping
        hotspot: true,
      },
      fieldset: 'communityMember',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'business',
      title: 'Member Business',
      type: 'string',
      fieldset: 'communityMember',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'biography',
      title: 'Member Bio',
      type: 'array',
      of: [{ type: 'block' }],
      fieldset: 'communityMember',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contactMedium',
      title: 'Member contact medium (email or website url)',
      type: 'string',
      fieldset: 'communityMember',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'facebook',
      title: 'Facebook profile url',
      type: 'url',
      fieldset: 'communityMember',
    },
    {
      name: 'instagram',
      title: 'Instagram profile url',
      type: 'url',
      fieldset: 'communityMember',
    },
    {
      name: 'category',
      title: 'Category of the community member',
      type: 'reference',
      to: [{ type: 'category' }],
      fieldset: 'communityMember',
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
  // Customize the preview field in sanity studio
  preview: {
    select: {
      media: 'image',
      title: 'name',
      tag: 'category.category',
    },
    prepare(selection) {
      const { title, tag, media } = selection;
      return {
        media,
        title,
        subtitle: `${tag}`,
      };
    },
  },
};
