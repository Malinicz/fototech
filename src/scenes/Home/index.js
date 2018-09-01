import React, { Component } from 'react';

import { Layout } from 'components/ui';
import {
  Intro,
  WhatWeFix,
  HowWeWork,
  Valuation,
  News,
  StayInTouch,
} from './components';

class Home extends Component {
  render() {
    return (
      <Layout>
        <Intro />
        <WhatWeFix />
        <HowWeWork />
        <Valuation />
        <News />
        <StayInTouch />
      </Layout>
    );
  }
}

Home.propTypes = {};

export default Home;
