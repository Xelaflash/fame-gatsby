// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from 'dotenv';

// specify where to find the .env file
dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `F.A.M.E - #food #art #music & #environment`,
    siteUrl: `https://welovefame.com`,
    description: `F.A.M.E. DEDICATED TO FOOD, ART, MUSIC & ENVIRONMENT are festivals, gatherings & pop ups organized in Barbados!`,
    keywords: `FAME, Barbados, Bajan, food,art, music, environment, festival, community`,
    image: '/static/meta_image.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans\:300,400,700`, `Montserrat\:800`],
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        // prefix: `cloudinaryImg/`,
      },
    },
  ],
};
