import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({
  children,
  location,
  description,
  title,
  image,
  keywords,
}) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  return (
    // title template will append whatever you put in the end of any title tag
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="en" />
      <title>{title}</title>
      {/* favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      {/* fallback for non supported svg */}
      <link rel="alternate icon" type="image/svg+xml" href="/favicon.ico" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="keywords" content={keywords.join(',')} />
      {/* Open graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:title" content={title} key="og:title " />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image || '/meta_image.png'} />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="og:site_name"
      />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      {/* Twitter Card data */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={site.siteMetadata.siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content={site.siteMetadata.description}
      />
      <meta property="twitter:creator" content={site.siteMetadata.siteUrl} />
      <meta name="twitter:image:src" content={image || '/meta_image.png'} />
      {children}
    </Helmet>
  );
}
