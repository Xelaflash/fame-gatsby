// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from 'dotenv';

// specify where to find the .env file
dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `F.A.M.E - #food #art #music & #environment`,
    siteUrl: `https://welovefame.com`,
    description: `F.A.M.E. DEDICATED TO FOOD, ART, MUSIC & ENVIRONMENT are festivals, gatherings & pop ups organized in Barbados!`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato :300,400,400i,700`],
        display: 'swap',
      },
    },
    {
      // name of the plugin
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'tcfn9cxr',
        dataset: 'production',
        // below permits to update gatsby on dev mode without doing a rebuild
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
