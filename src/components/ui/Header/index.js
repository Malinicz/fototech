import React, { Component } from 'react';
import { withSiteData, withRouteData } from 'react-static';
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
  box-shadow: ${({ isOnTop }) =>
    isOnTop
      ? '0px 5px 5px -5px rgba(0, 0, 0, 0.2)'
      : '0px 3px 5px 0px rgba(0, 0, 0, 0)'};
  background-color: ${({ theme, isOnTop }) =>
    isOnTop ? getRgba(theme.colors.brightest, 0.98) : theme.colors.brighter};
  transition: 0.2s ease box-shadow, 0.3s ease-out background-color;
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
      siteData: { navigation, header },
    } = this.props;

    return (
      <HeaderHolder isOnTop={!isOnTop}>
        <MaxWidthWrapper>
          <CompanyLogo src={fototechLogo} alt={header.companyLogoAlt} />
          <HeaderNavigation navLinks={navigation} activeLink={url} />
        </MaxWidthWrapper>
      </HeaderHolder>
    );
  }
}

Header.defaultProps = {
  siteData: {},
};

Header.propTypes = {
  siteData: object,
  match: object.isRequired,
};

export default withSiteData(withRouteData(Header));
