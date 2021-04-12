import { MdPalette as icon } from 'react-icons/md';

export default {
  // Computer name
  name: 'artGallery',
  // visible name
  title: 'Images for the Art page gallery',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Art image Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'artDescription',
      title: 'Art image Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'artist',
      title: 'Artist Name',
      type: 'reference',
      to: [{ type: 'communityMember' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'name',
      tag: 'artist.name',
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
