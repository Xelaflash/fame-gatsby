import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import NavbarLinks from './NavbarLinks';
import Logo from './Logo';
import '../styles/navbar.css';

const NavHomeStyles = styled.div`
  margin-bottom: 40px;
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

const Navbar = () => {
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  if (url === '/') {
    return (
      <NavHomeStyles>
        <Logo />
        <NavbarLinks />
      </NavHomeStyles>
    );
  }

  return (
    <div className="navbar">
      <LogoRound />
      <NavbarLinks />
    </div>
  );
};

export default Navbar;
