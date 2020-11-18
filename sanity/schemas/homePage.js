import { MdHome as icon } from 'react-icons/md';

export default {
  // Computer name
  name: 'homepagePics',
  // visible name
  title: 'HomePage pictures',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Picture Name',
      type: 'string',
      description: 'short description of the picture',
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
