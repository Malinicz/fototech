import React from 'react';
import { withRouteData } from 'react-static';

import { Section } from 'components/ui/base';

const FooterHolder = Section.withComponent('footer');

export const Footer = withRouteData(() => {
  return <FooterHolder>this is footer</FooterHolder>;
});

Footer.propTypes = {};
