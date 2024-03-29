import React from 'react';
import { withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import { Section } from 'components/ui/base';
import { PageHeading, SegmentedButtons } from 'components/ui';

const pageIcon = require('../assets/contact-icon.svg');

const HeadingSection = styled(Section)`
  flex-direction: column;
  align-items: center;
`;

export const Heading = withRouteData(
  ({
    routeData: { segmentNavigation, title, subtitle },
    history: {
      location: { pathname },
    },
  }) => {
    const segments = segmentNavigation.order.map(
      (segmentName) => segmentNavigation[segmentName]
    );

    return (
      <HeadingSection>
        <PageHeading icon={pageIcon} title={title} subtitle={subtitle} />
        <SegmentedButtons segments={segments} activeLink={pathname} />
      </HeadingSection>
    );
  }
);

Heading.defaultProps = {
  routeData: {},
  history: {},
};

Heading.propTypes = {
  history: object,
  routeData: object,
};
