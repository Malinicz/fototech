import React, { Component } from 'react';
import { node, string, object } from 'prop-types';
import { Head, withRouteData, withSiteData } from 'react-static';
import styled from 'styles';

import { Section, MaxWidthWrapper } from 'components/ui/base';
import { Header, Footer, Icon } from 'components/ui';

const MainBase = Section.withComponent('main');
const Main = MainBase.extend`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.stickyHeaderOffset + 50}px;
  margin-bottom: 100px;
  padding: 0;
  min-height: 500px;
  width: 100%;
  max-width: ${({ theme, maxWidth }) => maxWidth || `${theme.maxWidth}px`};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-top: ${({ theme }) => theme.stickyHeaderOffset}px;
    overflow: hidden;
  }
`;

const GlobalInfo = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.5em;
  z-index: 10000;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 0.8em;
  font-weight: bold;
`;

const GlobalInfoContent = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

class LayoutComp extends Component {
  state = {
    isGlobalInfoVisible: false,
  };

  componentDidMount() {
    const {
      siteData: { globalInfo },
    } = this.props;

    const globalInfoStorageValue = sessionStorage.getItem('showGlobalInfo');
    const shouldShowGlobalInfo = globalInfoStorageValue
      ? JSON.parse(globalInfoStorageValue)
      : true;

    const isGlobalInfoVisible =
      globalInfo && globalInfo.trim() && shouldShowGlobalInfo;

    if (isGlobalInfoVisible) {
      sessionStorage.setItem('showGlobalInfo', true);
      this.setState({ isGlobalInfoVisible });
    }
  }

  handleGlobalInfoClose = () => {
    this.setState({ isGlobalInfoVisible: false });
    if (window && window.sessionStorage) {
      window.sessionStorage.setItem('showGlobalInfo', false);
    }
  };

  render() {
    const {
      siteData: { globalInfo },
      canonicalUrl,
      maxWidth,
      children,
    } = this.props;
    const { isGlobalInfoVisible } = this.state;

    return (
      <React.Fragment>
        <Head>
          <link rel="canonical" href={canonicalUrl} />
        </Head>
        <Header />
        <Main maxWidth={maxWidth}>{children}</Main>
        {isGlobalInfoVisible && (
          <GlobalInfo>
            <GlobalInfoContent>
              <span>{globalInfo}</span>
              <IconHolder onClick={this.handleGlobalInfoClose}>
                <Icon name="close" size={15} />
              </IconHolder>
            </GlobalInfoContent>
          </GlobalInfo>
        )}
        <Footer />
      </React.Fragment>
    );
  }
}

LayoutComp.defaultProps = {
  siteData: {},
  maxWidth: '',
  canonicalUrl: '',
};

LayoutComp.propTypes = {
  siteData: object,
  children: node.isRequired,
  maxWidth: string,
  canonicalUrl: string,
};

export const Layout = withSiteData(withRouteData(LayoutComp));
