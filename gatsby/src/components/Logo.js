import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const LogoWrap = styled.div`
  .gatsby-image-wrapper {
    height: 150px;
    width: auto;
    margin: 10px auto 25px auto;
  }
`;

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo-text" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxHeight: 150, pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <LogoWrap as={Link} to="/">
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="logo"
        imgStyle={{ objectFit: 'contain' }}
      />
    </LogoWrap>
  );
};

export default Logo;
