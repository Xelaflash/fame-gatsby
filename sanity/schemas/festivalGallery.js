import { FaImages as icon } from 'react-icons/fa';

export default {
  // Computer name
  name: 'festivalGallery',
  // visible name
  title: 'Images for the Festival gallery',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Image Name',
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
  ],
};
