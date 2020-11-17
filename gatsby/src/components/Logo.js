import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const LogoWrap = styled.div`
  .gatsby-image-wrapper {
    height: 150px;
    width: auto;
    margin-top: 10px;
  }
`;

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo-round-black" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxHeight: 200, pngQuality: 80) {
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
