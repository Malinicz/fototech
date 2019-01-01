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

class Contact extends Component {
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
          <ContactDetails city="warszawa" />
          <ContactForm contactMail={contactDetails.warszawa.email} />
        </ContentSection>
      </Layout>
    );
  }
}

Contact.defaultProps = {
  siteData: {},
  // routeData: {},
};

Contact.propTypes = {
  siteData: object,
  // routeData: object,
};

export default withSiteData(withRouteData(Contact));
