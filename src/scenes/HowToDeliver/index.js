import React, { Component } from 'react';
import { withSiteData, withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import { Section, BlockLink } from 'components/ui/base';
import { Layout, Icon } from 'components/ui';
import { SingleStep, StepperHolder, Heading } from './components';
import { StepAddresses } from './components/StepAddresses';

const ContentSection = styled(Section)`
  justify-content: center;
`;

class HowToDeliver extends Component {
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
      routeData: { postOfficeSteps },
    } = this.props;

    return (
      <Layout>
        <Heading />
        <ContentSection>
          <StepperHolder>
            <SingleStep
              title={postOfficeSteps[0].title}
              description={postOfficeSteps[0].description}
              customContent={this.getStepOneButton(
                postOfficeSteps[0].buttonLabel
              )}
              stepNumber={1}
            />
            <SingleStep
              title={postOfficeSteps[1].title}
              description={postOfficeSteps[1].description}
              stepNumber={2}
            />
            <SingleStep
              title={postOfficeSteps[2].title}
              customContent={<StepAddresses places={contactDetails} />}
              stepNumber={3}
            />
            <SingleStep
              title={postOfficeSteps[3].title}
              description={postOfficeSteps[3].description}
              stepNumber={4}
              isLast
            />
          </StepperHolder>
        </ContentSection>
      </Layout>
    );
  }
}

HowToDeliver.defaultProps = {
  siteData: {},
  routeData: {},
};

HowToDeliver.propTypes = {
  siteData: object,
  routeData: object,
};

export default withSiteData(withRouteData(HowToDeliver));
