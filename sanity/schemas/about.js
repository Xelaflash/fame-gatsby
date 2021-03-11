import { BsPersonSquare as icon } from 'react-icons/bs';

export default {
  // Computer name
  name: 'aboutPage',
  // visible name
  title: 'Name texts and pics for About page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Founder Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        // permet de sélectionner une zone de la photo pour le cropping
        hotspot: true,
      },
    },
    {
      name: 'descriptionText',
      title: 'Description text',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
