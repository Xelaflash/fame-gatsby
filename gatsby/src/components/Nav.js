import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import NavbarLinks from './NavbarLinks';

const NavStyles = styled.div`
  text-align: center;
  margin: 10px auto 20px auto;
  padding: 0 10px;
  @media (min-width: 813px) {
    margin: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  @media (min-width: 900px) {
    padding: 0 40px;
  }
`;

const LogoRoundStyles = styled.div`
  width: 110px;
  @media (max-width: 400px) {
    margin-left: 10px;
  }
  @media (max-width: 812px) {
    margin: auto;
  }
`;

const LogoRound = () => {
  const logoSmall = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo-round-white" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 110, pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <LogoRoundStyles>
      <Link to="/">
        <Img fluid={logoSmall.file.childImageSharp.fluid} alt="logo" />
      </Link>
    </LogoRoundStyles>
  );
};

const Navbar = () => (
  <NavStyles>
    <LogoRound />
    <NavbarLinks />
  </NavStyles>
);

export default Navbar;
