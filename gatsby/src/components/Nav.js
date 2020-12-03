import React from 'react';
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';

const Navigation = styled.nav`
  text-transform: uppercase;
  margin: 10px auto 50px;
  ul {
    margin: 0 auto;
    padding: 0 10px;
    display: grid;
    /* logo will be in the middle of the links and will take the remaining space with auto */
    grid-template-columns: repeat(4, 1fr);
    /* 2rem == 20px 'cause e set the base font size to 10px in global styles */
    grid-gap: 1rem;
    align-items: center;
    text-align: center;
    list-style: none;
    width: 80%;
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
      width: 100%;
      grid-gap: 1.5rem;
    }
  }
  @media (max-width: 790px) {
    --columns: 2;
    ul {
      width: 80%;
      grid-template-columns: repeat(var(--columns), 1fr);
    }
  }
`;

const Navbar = () => (
  <Navigation>
    <div>
      <NavbarLinks />
    </div>
  </Navigation>
);

export default Navbar;
