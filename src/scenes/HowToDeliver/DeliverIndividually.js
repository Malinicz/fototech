import React, { Component } from 'react';
import { withSiteData, withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import { Section } from 'components/ui/base';
import { Layout } from 'components/ui';
import {
  SingleStep,
  StepperHolder,
  Heading,
  StepAddresses,
} from './components';

const ContentSection = styled(Section)`
  justify-content: center;
`;

class DeliverIndividually extends Component {
  render() {
    const {
      siteData: { contactDetails },
      routeData: { deliverIndividuallySteps },
    } = this.props;

    return (
      <Layout>
        <Heading />
        <ContentSection>
          <StepperHolder>
            <SingleStep
              title={deliverIndividuallySteps[0].title}
              customContent={<StepAddresses places={contactDetails} />}
              stepNumber={1}
            />
            <SingleStep
              title={deliverIndividuallySteps[1].title}
              description={deliverIndividuallySteps[1].description}
              stepNumber={2}
              isLast
            />
          </StepperHolder>
        </ContentSection>
      </Layout>
    );
  }
}

DeliverIndividually.defaultProps = {
  siteData: {},
  routeData: {},
};

DeliverIndividually.propTypes = {
  siteData: object,
  routeData: object,
};

export default withSiteData(withRouteData(DeliverIndividually));
