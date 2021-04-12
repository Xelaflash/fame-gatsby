import { MdHome as icon } from 'react-icons/md';

export default {
  // Computer name
  name: 'carouselPics',
  // visible name
  title: 'Pictures for Carousel',
  type: 'document',
  icon,
  fieldsets: [{ name: 'carouselPics', title: 'Pictures for Carousel' }],
  fields: [
    {
      name: 'name',
      title: 'Picture Name',
      type: 'string',
      description: 'short description of the picture',
      fieldset: 'carouselPics',
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
      fieldset: 'carouselPics',
      validation: (Rule) => Rule.required(),
    },
  ],
};
