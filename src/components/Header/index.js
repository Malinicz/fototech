import React from 'react';
import { withRouteData } from 'react-static';

import { Section } from 'components/ui/base';

const HeaderHolder = Section.withComponent('header');

export const Header = withRouteData(() => {
  return <HeaderHolder>this is header</HeaderHolder>;
});
