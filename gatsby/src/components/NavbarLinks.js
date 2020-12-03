import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const NavItem = styled(Link)`
  text-decoration: none;
  color: var(--black);
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  font-family: var(--headings-font);
  font-size: 3rem;
  letter-spacing: 2px;
  :hover {
    text-decoration: none;
    color: var(--black);
  }
  .gatsby-image-wrapper {
    margin-left: 10px;
    top: 8px;
  }

  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

const NavbarLinks = () => {
  const icons = useStaticQuery(graphql`
    fragment icons on file {
      childImageSharp {
        fixed(height: 32) {
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
          fixed(height: 32) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      iconArt: file(name: { eq: "icon-art-black" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(height: 32) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      iconMusic: file(
        name: { eq: "icon-music-black" }
        extension: { eq: "png" }
      ) {
        childImageSharp {
          fixed(height: 32) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      iconEnvironment: file(
        name: { eq: "icon-environment-black" }
        extension: { eq: "png" }
      ) {
        childImageSharp {
          fixed(height: 32) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
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
    </>
  );
};

export default NavbarLinks;
