import { FaRecycle as icon } from 'react-icons/fa';

export default {
  // Computer name
  name: 'environment',
  // visible name
  title: 'Images for the Environment page',
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
    {
      name: 'environmentSelect',
      title: 'Select the type of environment',
      type: 'string',
      options: {
        list: [
          { title: 'Inner Environment', value: 'inner' },
          { title: 'Outer Environment', value: 'outer' },
        ],
      },
    },
  ],
};
