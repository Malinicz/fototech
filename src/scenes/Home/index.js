import React, { Component } from 'react';
import { withSiteData } from 'react-static';
import styled from 'styles';

import { Header, Footer } from 'components/ui';

const Main = styled.main`
  margin-top: ${({ theme }) => theme.stickyHeaderOffset}px;
`;

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main style={{ minHeight: '2000px' }}>this is home</Main>
        <Footer />
      </React.Fragment>
    );
  }
}

Home.propTypes = {};

export default withSiteData(Home);
