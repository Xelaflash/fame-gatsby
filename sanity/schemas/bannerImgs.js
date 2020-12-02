import { FaImages as icon } from 'react-icons/fa';

export default {
  // Computer name
  name: 'bannerImgs',
  // visible name
  title: 'Images for the banners',
  type: 'document',
  icon,
  fieldsets: [{ name: 'bannerImgs', title: 'Images for the Banners' }],
  fields: [
    {
      name: 'name',
      title: 'Image Name',
      type: 'string',
      fieldset: 'bannerImgs',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        // permet de sélectionner une zone de la photo pour le cropping
        hotspot: true,
      },
      fieldset: 'bannerImgs',
    },
  ],
};
