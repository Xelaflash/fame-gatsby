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
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'artDescription',
      title: 'Art image Description',
      type: 'text',
    },
    {
      name: 'artist',
      title: 'Artist Name',
      type: 'reference',
      to: [{ type: 'communityMember' }],
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
