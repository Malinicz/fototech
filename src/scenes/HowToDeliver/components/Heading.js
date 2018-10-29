import React from 'react';
import { withRouteData } from 'react-static';
import { object } from 'prop-types';
import styled from 'styles';

import { Section } from 'components/ui/base';
import { PageHeading, SegmentedButtons } from 'components/ui';

const pageIcon = require('../assets/how-to-deliver-icon.svg');

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
          title="Jak dostarczyć?"
          subtitle="Bardzo prosto! Wybierz sposób, który Ci najbardziej odpowiada."
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
