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
  font-size: 3rem;
  letter-spacing: 2px;

  :hover {
    text-decoration: none;
    color: var(--black);
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    font-size: 2rem;
    z-index: 6;
  }
`;

const NavbarLinks = () => (
  <>
    <ul>
      <li>
        <span className="mark">
          <NavItem to="/food">Food</NavItem>
        </span>
      </li>
      <li>
        <span className="mark">
          <NavItem to="/art">Art</NavItem>
        </span>
      </li>
      <li>
        <span className="mark">
          <NavItem to="/music">Music</NavItem>
        </span>
      </li>
      <li>
        <span className="mark">
          <NavItem to="/environment">Environment</NavItem>
        </span>
      </li>
      <li>
        <span className="mark">
          <NavItem to="/festival">Festival</NavItem>
        </span>
      </li>
      <li>
        <span className="mark">
          <NavItem to="/community">Community</NavItem>
        </span>
      </li>
      <li>
        <span className="mark">
          <NavItem to="/about">About Us</NavItem>
        </span>
      </li>
      <li>
        <span className="mark">
          <NavItem to="/weeklyTalk">Weekly Talk</NavItem>
        </span>
      </li>
    </ul>
  </>
);

export default NavbarLinks;
