// @flow
import React, { ReactChild } from 'react';
import { LogoMenuContainer, NavbarLogo, MenuContainer } from './styled';

type Props = {
  logo?: any;
  children: any;
};

const MenuWithLogo = ({ logo, children }: Props) => (
  <LogoMenuContainer>
    <NavbarLogo src={logo} />
    <MenuContainer>{children}</MenuContainer>
  </LogoMenuContainer>
);

export default MenuWithLogo;
