import React from 'react';
import { withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import { Section } from 'components/ui/base';
import { PageHeading, SegmentedButtons } from 'components/ui';

const pageIcon = require('../assets/services-icon.svg');

const HeadingSection = styled(Section)`
  flex-direction: column;
  align-items: center;
`;

export const Heading = withRouteData(
  ({
    routeData: { segmentNavigation },
    history: {
      location: { pathname },
    },
  }) => {
    return (
      <HeadingSection>
        <PageHeading
          icon={pageIcon}
          title="Usługi"
          subtitle="Kliknij w kategorię, aby dowiedzieć się więcej."
        />
        <SegmentedButtons segments={segmentNavigation} activeLink={pathname} />
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
