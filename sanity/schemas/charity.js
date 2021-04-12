import { FaFunnelDollar as icon } from 'react-icons/fa';

export default {
  name: 'charity',
  title: 'Charity',
  type: 'document',
  icon,
  fields: [
    {
      name: 'NpoName',
      title: 'NPO Name',
      type: 'string',
      description: 'Name of the NPO',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'NpoDesc',
      title: ' NPO description',
      type: 'string',
      description: 'Small text to describe the NPO',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'charityEvent',
      title: 'Charity Event text',
      type: 'text',
      description: 'Text describing the charity events done',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'NpoLink',
      title: 'NPO link ',
      type: 'url',
      description: 'Npo link that will be displayed under the DONATE button',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'NPO Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
