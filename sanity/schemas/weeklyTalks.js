import { BsFillChatSquareQuoteFill as icon } from 'react-icons/bs';

export default {
  // Computer name
  name: 'weeklyTalkPage',
  // visible name
  title: 'Details for weekly talk page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'talkTitle',
      title: 'Talk Title',
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
    {
      name: 'link',
      title: 'Talk IG link',
      type: 'string',
    },
  ],
};
