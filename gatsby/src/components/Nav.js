import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import NavbarLinks from './NavbarLinks';
import Logo from './Logo';

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

const NavHomeStyles = styled.div`
  margin-bottom: 40px;
`;

const NavLinksStyles = styled.nav`
  text-transform: uppercase;
  ul {
    /* margin: 0 auto; */
    padding: 0 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 2rem == 20px 'cause e set the base font size to 10px in global styles */
    grid-gap: 1rem;
    align-items: center;
    text-align: center;
    list-style: none;
  }
  li {
    transform: rotate(var(--rotate));
    order: 1;
    width: fit-content;
    margin: auto;
    &:nth-child(odd) {
      --rotate: -2deg;
    }
    &:nth-child(even) {
      --rotate: 2deg;
    }
    &:hover {
      --rotate: 3deg;
      transform: rotate(var(--rotate));
    }
  }
  @media (max-width: 1000px) {
    ul {
      grid-gap: 1.5rem;
    }
  }
  @media (max-width: 812px) {
    --columns: 2;
    ul {
      grid-template-columns: repeat(var(--columns), 1fr);
    }
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

const Navbar = () => {
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  if (url === '/') {
    return (
      <NavHomeStyles>
        <Logo />
        <NavLinksStyles>
          <div>
            <NavbarLinks />
          </div>
        </NavLinksStyles>
      </NavHomeStyles>
    );
  }

  return (
    <NavStyles>
      <LogoRound />
      <NavLinksStyles>
        <div>
          <NavbarLinks />
        </div>
      </NavLinksStyles>
    </NavStyles>
  );
};

export default Navbar;
