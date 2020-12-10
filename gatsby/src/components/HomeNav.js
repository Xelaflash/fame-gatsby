import React from 'react';
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';
import Logo from './Logo';

const NavHomeStyles = styled.div`
  margin-bottom: 40px;
`;

const HomeNav = () => (
  <NavHomeStyles>
    <Logo />
    <NavbarLinks />
  </NavHomeStyles>
);

export default HomeNav;
