import React, { Component } from 'react';
import { withSiteData, withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import { Section, BlockLink } from 'components/ui/base';
import { Layout, Icon } from 'components/ui';
import {
  Heading,
  ContactDetails,
  ContactForm,
  MaxWidthWrapper,
  Map,
} from './components';
import { MapHolder, MapHeading } from './components/Map';

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
      routeData: { mapHeading },
    } = this.props;

    return (
      <Layout maxWidth="100%">
        <MaxWidthWrapper>
          <Heading />
          <ContentSection>
            <ContactDetails city="krakow" />
            <ContactForm contactMail={contactDetails.krakow.email} />
          </ContentSection>
        </MaxWidthWrapper>
        <MapHolder>
          <MapHeading>{mapHeading}</MapHeading>
          <Map
            lat={contactDetails.krakow.lat}
            lng={contactDetails.krakow.lng}
          />
        </MapHolder>
      </Layout>
    );
  }
}

ContactKrakow.defaultProps = {
  siteData: {},
  routeData: {},
};

ContactKrakow.propTypes = {
  siteData: object,
  routeData: object,
};

export default withSiteData(withRouteData(ContactKrakow));
