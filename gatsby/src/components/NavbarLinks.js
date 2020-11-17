import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavItem = styled(Link)`
  text-decoration: none;
  color: var(--black);
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-family: var(--headings-font);
  font-size: 2rem;
  letter-spacing: 2px;

  :hover {
    text-decoration: none;
    color: var(--black);
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

const NavbarLinks = () => (
  <>
    <ul>
      <li>
        <span className="mark">
          <NavItem to="/">Food</NavItem>
        </span>
      </li>
      <li>
        <span className="mark">
          <NavItem to="/">Art</NavItem>
        </span>
      </li>
      <li>
        <span className="mark">
          <NavItem to="/">Music</NavItem>
        </span>
      </li>
      <li>
        <span className="mark">
          <NavItem to="/">Environment</NavItem>
        </span>
      </li>
      <li>
        <span className="mark">
          <NavItem to="/">Festival</NavItem>
        </span>
      </li>
      <li>
        <span className="mark">
          <NavItem to="/">Community</NavItem>
        </span>
      </li>
      <li>
        <span className="mark">
          <NavItem to="/">About Us</NavItem>
        </span>
      </li>
      <li>
        <span className="mark">
          <NavItem to="/">Weekly Talk</NavItem>
        </span>
      </li>
    </ul>
  </>
);

export default NavbarLinks;
