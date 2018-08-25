import React from 'react';
import { array } from 'prop-types';
import styled from 'styles';

const FooterNavigationHolder = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  min-height: 120px;
  margin-top: 30px;
`;

const NavElementsHolder = styled.ul`
  display: flex;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const NavElementHolder = styled.div`
  position: relative;
`;

const NavElement = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
`;

const NavLink = styled.a`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 1em;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primaryDarker : theme.colors.darker};
  transition: 0.2s color ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDarker};
  }
`;

const Divider = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  margin: 10px 35px 0 35px;
  font-size: 1em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryDarker};

  &::after {
    content: '|';
  }
`;

const NavSubElementsHolder = styled.ul`
  position: absolute;
  top: 3em;
  left: 0;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const NavSubElement = styled.li`
  padding: 2px 0;
`;

const NavSubLink = styled.a`
  font-size: 0.75em;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDarker};
  }
`;

export const FooterNavigation = ({ navLinks }) => {
  return (
    <FooterNavigationHolder>
      <NavElementsHolder>
        {navLinks.map((navLink, index) => {
          return (
            <React.Fragment key={navLink.id}>
              <Divider isVisible={index !== 0} />
              <NavElementHolder>
                <NavLink
                  href={navLink.slug ? navLink.slug : navLink.url}
                  target={navLink.url ? '_blank' : '_self'}>
                  <NavElement>{navLink.label}</NavElement>
                </NavLink>
                <NavSubElementsHolder>
                  {navLink.sections &&
                    navLink.sections.map((section) => {
                      return (
                        <NavSubLink key={section.id} href={section.slug}>
                          <NavSubElement>{section.label}</NavSubElement>
                        </NavSubLink>
                      );
                    })}
                </NavSubElementsHolder>
              </NavElementHolder>
            </React.Fragment>
          );
        })}
      </NavElementsHolder>
    </FooterNavigationHolder>
  );
};

FooterNavigation.propTypes = {
  navLinks: array.isRequired,
};
