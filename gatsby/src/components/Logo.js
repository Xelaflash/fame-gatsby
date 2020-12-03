import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const LogoWrap = styled.div`
  .gatsby-image-wrapper {
    height: 250px;
    width: auto;
    margin: 100px auto 30px auto;
  }
`;

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo-text" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxHeight: 250, pngQuality: 100) {
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
