import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const NavLinksStyles = styled.nav`
  text-transform: uppercase;
  ul {
    padding: 0 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    align-items: center;
    text-align: center;
    list-style: none;
    max-width: 900px;
    margin: auto;
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

const NavItem = styled(Link)`
  text-decoration: none;
  color: var(--black);
  white-space: nowrap;
  padding: 2px 8px;
  transition: all 200ms ease-in;
  font-family: var(--headings-font);
  font-size: 2.2rem;
  letter-spacing: 2px;
  :hover {
    text-decoration: none;
    color: var(--black);
  }
  .gatsby-image-wrapper {
    margin-left: 10px;
    top: 4px;
  }
`;

const NavbarLinks = () => {
  const icons = useStaticQuery(graphql`
    fragment icons on file {
      childImageSharp {
        fixed(height: 25) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    query {
      iconFood: file(
        name: { eq: "icon-food-black" }
        extension: { eq: "png" }
      ) {
        childImageSharp {
          fixed(height: 25) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      iconArt: file(name: { eq: "icon-art-black" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(height: 25) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      iconMusic: file(
        name: { eq: "icon-music-black" }
        extension: { eq: "png" }
      ) {
        childImageSharp {
          fixed(height: 25) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      iconEnvironment: file(
        name: { eq: "icon-environment-black" }
        extension: { eq: "png" }
      ) {
        childImageSharp {
          fixed(height: 25) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  return (
    <NavLinksStyles>
      <ul>
        <li>
          <div className="mark">
            <NavItem to="/food">
              Food
              <Img
                fixed={icons.iconFood.childImageSharp.fixed}
                alt="Icon food - FAME"
              />
            </NavItem>
          </div>
        </li>
        <li>
          <div className="mark">
            <NavItem to="/art">
              Art
              <Img
                fixed={icons.iconArt.childImageSharp.fixed}
                alt="Icon art - FAME"
              />
            </NavItem>
          </div>
        </li>
        <li>
          <div className="mark">
            <NavItem to="/music">
              Music
              <Img
                fixed={icons.iconMusic.childImageSharp.fixed}
                alt="Icon Music - FAME"
              />
            </NavItem>
          </div>
        </li>
        <li>
          <div className="mark">
            <NavItem to="/environment">
              Environment
              <Img
                fixed={icons.iconEnvironment.childImageSharp.fixed}
                alt="Icon Environment - FAME"
              />
            </NavItem>
          </div>
        </li>
        <li>
          <div className="mark">
            <NavItem to="/festival">Festival</NavItem>
          </div>
        </li>
        <li>
          <div className="mark">
            <NavItem to="/community">Community</NavItem>
          </div>
        </li>
        <li>
          <div className="mark">
            <NavItem to="/about">About Us</NavItem>
          </div>
        </li>
        <li>
          <div className="mark">
            <NavItem to="/weeklyTalk">Weekly Talk</NavItem>
          </div>
        </li>
      </ul>
    </NavLinksStyles>
  );
};

export default NavbarLinks;
