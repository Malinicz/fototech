import React, { Component } from 'react';
import { withSiteData, withRouteData } from 'react-static';
// import { object } from 'prop-types';
import styled from 'styles';

import { Section } from 'components/ui/base';
import { Layout } from 'components/ui';
import { Heading } from './components';

const ContentSection = styled(Section)`
  justify-content: center;
`;

class Services extends Component {
  render() {
    // const {
    //   siteData: {},
    //   routeData: {},
    // } = this.props;

    return (
      <Layout>
        <Heading />
        <ContentSection>naprawa</ContentSection>
      </Layout>
    );
  }
}

// Services.defaultProps = {
//   siteData: {},
//   routeData: {},
// };

// Services.propTypes = {
//   siteData: object,
//   routeData: object,
// };

export default withSiteData(withRouteData(Services));
