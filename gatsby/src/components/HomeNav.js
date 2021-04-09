import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import NavbarLinks from './NavbarLinks';

const NavHomeStyles = styled.div`
  margin-bottom: 40px;
`;

const LogoWrap = styled.div`
  text-align: center;
  .gatsby-image-wrapper {
    height: 250px;
    width: auto;
    margin: 40px auto 30px auto;
  }
  @media (max-width: 812px) {
    .gatsby-image-wrapper {
      height: 125px;
    }
  }
`;

const Logo = () => {
  const dataHomeNav = useStaticQuery(graphql`
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
    <LogoWrap>
      <Img
        fluid={dataHomeNav.file.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="logo"
      />
    </LogoWrap>
  );
};

const HomeNav = () => (
  <NavHomeStyles>
    <Logo />
    <NavbarLinks />
  </NavHomeStyles>
);

export default HomeNav;
