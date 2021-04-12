import { BsFillChatQuoteFill as icon } from 'react-icons/bs';

export default {
  name: 'quotes',
  title: 'Quotes',
  type: 'document',
  icon,
  fields: [
    {
      name: 'quoteText',
      title: 'Quote Text',
      type: 'string',
      description: 'Quote for the home page',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'quoteAuthor',
      title: 'Quote Author',
      type: 'string',
      description: "Author's name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'quoteId',
      title: 'Quote ref',
      type: 'string',
      description: 'Reference of the Quote (Technical purpose)',
    },
  ],
};
