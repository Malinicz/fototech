import React, { Component } from 'react';
import { withSiteData, withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import { Section, BlockLink } from 'components/ui/base';
import { Layout, Icon } from 'components/ui';
import { Heading, ContactDetails, ContactForm } from './components';

const ContentSection = styled(Section)`
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

class ContactKrakow extends Component {
  getStepOneButton = (label) => {
    return (
      <BlockLink href="#">
        {label}
        <Icon name="download" size={15} marginLeft={5} />
      </BlockLink>
    );
  };

  render() {
    const {
      siteData: { contactDetails },
      // routeData: {},
    } = this.props;

    return (
      <Layout>
        <Heading />
        <ContentSection>
          <ContactDetails city="krakow" />
          <ContactForm contactMail={contactDetails.krakow.email} />
        </ContentSection>
      </Layout>
    );
  }
}

ContactKrakow.defaultProps = {
  siteData: {},
  // routeData: {},
};

ContactKrakow.propTypes = {
  siteData: object,
  // routeData: object,
};

export default withSiteData(withRouteData(ContactKrakow));
