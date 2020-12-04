import { FaImages as icon } from 'react-icons/fa';

export default {
  // Computer name
  name: 'homeGallery',
  // visible name
  title: 'Images for the gallery',
  type: 'document',
  icon,
  fieldsets: [{ name: 'homeGallery', title: 'Images for the Gallery' }],
  fields: [
    {
      name: 'name',
      title: 'Image Name',
      type: 'string',
      fieldset: 'homeGallery',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        // permet de sélectionner une zone de la photo pour le cropping
        hotspot: true,
      },
      fieldset: 'homeGallery',
    },
  ],
};
