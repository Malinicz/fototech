import React, { Component } from 'react';
import { withSiteData, withRouteData, Link } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import { Section, MaxWidthWrapper } from 'components/ui/base';
import { HeaderNavigation } from './HeaderNavigation';

import { getRgba } from 'styles/helpers';

const fototechLogo = require('./assets/fototech-logo.svg');

const HeaderBase = Section.withComponent('header');
const HeaderHolder = HeaderBase.extend`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  justify-content: center;
  padding: 0;
  height: ${({ theme }) => theme.stickyHeaderOffset}px;
  max-width: unset;
  box-shadow: ${({ isOnTop, isExpanded }) =>
    isOnTop || isExpanded
      ? '0px 5px 5px -5px rgba(0, 0, 0, 0.2)'
      : '0px 3px 5px 0px rgba(0, 0, 0, 0)'};
  background-color: ${({ theme, isOnTop }) =>
    isOnTop ? getRgba(theme.colors.brightest, 0.98) : theme.colors.brighter};
  transition: 0.2s ease box-shadow, 0.3s ease-out background-color,
    0.3s ease height;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    height: ${({ theme, isExpanded }) =>
      isExpanded ? '400px' : `${theme.stickyHeaderOffset}px`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledMaxWidthWrapper = MaxWidthWrapper.extend`
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    justify-content: space-between;
  }
`;

const CompanyLogoLink = styled(Link)`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    position: absolute;
    margin-top: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin-top: 14px;
  }
`;

const CompanyLogo = styled.img`
  width: 210px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: 180px;
  }
`;

const Stripe = styled.div`
  margin: 2.5px 0;
  width: ${({ width }) => width || 30}px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.darker};
  transition: 0.3s ease width;
`;

const MobileMenu = styled.div`
  position: absolute;
  right: 10px;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-top: 10px;
  padding: 9px;
  height: 50px;
  width: 50px;
  cursor: pointer;

  &:hover ${Stripe} {
    width: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    display: flex;
  }
`;

class Header extends Component {
  state = { isOnTop: true, isMobileMenuActive: false };

  componentDidMount() {
    window.addEventListener('scroll', this.scrollCheck);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollCheck);
  }

  scrollCheck = () => {
    const { isOnTop } = this.state;
    if (!isOnTop && window.scrollY <= 10) {
      this.setState({ isOnTop: true });
    }

    if (isOnTop && window.scrollY > 10) {
      this.setState({ isOnTop: false });
    }
  };

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      isMobileMenuActive: !prevState.isMobileMenuActive,
    }));
  };

  render() {
    const { isOnTop, isMobileMenuActive } = this.state;
    const {
      routeData: { navLinkActivityUrl },
      siteData: { navigation, header },
    } = this.props;

    return (
      <HeaderHolder isOnTop={!isOnTop} isExpanded={isMobileMenuActive}>
        <StyledMaxWidthWrapper>
          <CompanyLogoLink to="/">
            <CompanyLogo
              src={fototechLogo}
              alt={header.companyLogoAlt}
              isMobileMenuActive={isMobileMenuActive}
            />
          </CompanyLogoLink>
          <HeaderNavigation
            navLinks={navigation}
            activeLink={navLinkActivityUrl}
            isMobileMenuActive={isMobileMenuActive}
          />
          <MobileMenu onClick={this.toggleMobileMenu}>
            <Stripe width={25} />
            <Stripe width={20} />
            <Stripe />
          </MobileMenu>
        </StyledMaxWidthWrapper>
      </HeaderHolder>
    );
  }
}

Header.defaultProps = {
  siteData: {},
  routeData: {},
};

Header.propTypes = {
  siteData: object,
  routeData: object,
};

export default withSiteData(withRouteData(Header));
