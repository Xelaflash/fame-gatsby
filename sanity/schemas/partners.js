import { FaUserFriends as icon } from 'react-icons/fa';

export default {
  // Computer name
  name: 'partners',
  // visible name
  title: 'Partners logo to display on Homepage',
  type: 'document',
  icon,
  fieldsets: [{ name: 'partners', title: 'Partners logo ' }],
  fields: [
    {
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      fieldset: 'partners',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        // permet de sélectionner une zone de la photo pour le cropping
        hotspot: true,
      },
      fieldset: 'partners',
    },
  ],
};
