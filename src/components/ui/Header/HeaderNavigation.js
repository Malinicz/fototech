import React from 'react';
import { Link } from 'react-static';
import { object, string, bool } from 'prop-types';
import styled from 'styles';

const HeaderNavigationHolder = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    position: absolute;
    top: ${({ isMobileMenuActive }) =>
      isMobileMenuActive ? '100px' : '-500px'};
    left: 50%;
    opacity: ${({ isMobileMenuActive }) => (isMobileMenuActive ? 1 : 0)};
    transform: translateX(-50%);
    transition: 0.3s ease opacity;
  }
`;

const NavElementsHolder = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    flex-direction: column;
  }
`;

const NavElement = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
`;

const NavLink = styled(({ theme, isLinkActive, ...props }) => (
  <Link {...props} />
))`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 0.8em;
  color: ${({ theme, isLinkActive }) =>
    isLinkActive ? theme.colors.primaryDarker : theme.colors.darkest};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    display: none;
  }
`;

export const HeaderNavigation = ({
  navLinks,
  activeLink,
  isMobileMenuActive,
}) => {
  return (
    <HeaderNavigationHolder isMobileMenuActive={isMobileMenuActive}>
      <NavElementsHolder>
        {Object.keys(navLinks).map((navSection, index) => {
          const navLink = navLinks[navSection];
          const isActive =
            navLink.slug && activeLink && navLink.slug === activeLink;

          return (
            <React.Fragment key={navLink.id}>
              <Divider isVisible={index !== 0} />
              <NavLink to={navLink.slug} isLinkActive={isActive}>
                <NavElement>{navLink.label}</NavElement>
              </NavLink>
            </React.Fragment>
          );
        })}
      </NavElementsHolder>
    </HeaderNavigationHolder>
  );
};

HeaderNavigation.defaultProps = {
  activeLink: '',
};

HeaderNavigation.propTypes = {
  navLinks: object.isRequired,
  isMobileMenuActive: bool.isRequired,
  activeLink: string,
};
