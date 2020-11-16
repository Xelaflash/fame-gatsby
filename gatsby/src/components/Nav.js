import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const NavStyles = styled.nav`
  border: 1px solid red;
  height: 80px;
  padding: 1rem 0;
  margin: 20px 0;
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    /* logo will be in the middle of the links and will take the remaining space with auto */
    grid-template-columns: repeat(8, 1fr);
    /* 2rem == 20px 'cause e set the base font size to 10px in global styles */
    grid-gap: 2.3rem;
    align-items: center;
    text-align: center;
    list-style: none;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }
    &:hover {
      --rotate: 3deg;
    }
  }
  a {
    color: var(--black);
    font-size: 2rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
    @media (max-width: 800px) {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 700px) {
    --columns: 4;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid var(--grey);
    padding-bottom: 2rem;
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
    }
  }
  @media (max-width: 500px) {
    --columns: 2;
  }
`;

export default function Nav() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/logo-round-black.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Food</Link>
        </li>
        <li>
          <Link to="/">Art</Link>
        </li>
        <li>
          <Link to="/">
            <Img
              fixed={data.file.childImageSharp.fixed}
              alt="Fame festival logo"
              loading="eager"
              className="logo"
            />
          </Link>
        </li>
        <li>
          <Link to="/">Music</Link>
        </li>
        <li>
          <Link to="/">Environment</Link>
        </li>
        <li>
          <Link to="/">Festival</Link>
        </li>
        <li>
          <Link to="/">Community</Link>
        </li>
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/">Weekly talk</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
