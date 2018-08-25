import React, { Component } from 'react';
import { withRouteData, withSiteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import { Section, MaxWidthWrapper } from 'components/ui/base';
import { HeaderNavigation } from 'components/ui';

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
  padding: ${({ theme }) => `0 ${theme.spacing}px 0 ${theme.spacing}px`};
  height: ${({ theme }) => theme.stickyHeaderOffset}px;
  max-width: unset;
  box-shadow: ${({ isOnTop }) =>
    isOnTop
      ? '0px 5px 5px -5px rgba(0, 0, 0, 0.2)'
      : '0px 3px 5px 0px rgba(0, 0, 0, 0)'};
  background-color: ${({ theme }) => getRgba(theme.colors.brighter, 0.98)};
  transition: 0.3s ease box-shadow;
`;

const CompanyLogo = styled.img`
  width: 210px;
`;

class Header extends Component {
  state = { isOnTop: true };

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

  render() {
    const { isOnTop } = this.state;
    const {
      match: { url },
      siteData: { navigation },
      routeData: { companyLogoAlt },
    } = this.props;

    return (
      <HeaderHolder isOnTop={!isOnTop}>
        <MaxWidthWrapper>
          <CompanyLogo src={fototechLogo} alt={companyLogoAlt} />
          <HeaderNavigation navLinks={navigation} activeLink={url} />
        </MaxWidthWrapper>
      </HeaderHolder>
    );
  }
}

Header.propTypes = {
  siteData: object.isRequired,
  routeData: object.isRequired,
  match: object.isRequired,
};

export default withSiteData(withRouteData(Header));
