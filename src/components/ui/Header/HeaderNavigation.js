import React from 'react';
import { array, string } from 'prop-types';
import styled from 'styles';

const HeaderNavigationHolder = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
`;

const NavElementsHolder = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const NavElement = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
`;

const NavLink = styled.a`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 0.8em;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primaryDarker : theme.colors.darkest};
  transition: 0.2s color ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDarker};
  }
`;

const Divider = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  margin: 0 7px;
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.primaryDarker};

  &::after {
    content: '●';
  }
`;

export const HeaderNavigation = ({ navLinks, activeLink }) => {
  return (
    <HeaderNavigationHolder>
      <NavElementsHolder>
        {navLinks.map((navLink, index) => {
          const isActive = navLink.slug === activeLink;
          return (
            <React.Fragment key={navLink.id}>
              <Divider isVisible={index !== 0} />
              <NavLink
                href={navLink.slug ? navLink.slug : navLink.url}
                target={navLink.url ? '_blank' : '_self'}
                isActive={isActive}>
                <NavElement>{navLink.label}</NavElement>
              </NavLink>
            </React.Fragment>
          );
        })}
      </NavElementsHolder>
    </HeaderNavigationHolder>
  );
};

HeaderNavigation.propTypes = {
  navLinks: array.isRequired,
  activeLink: string.isRequired,
};
