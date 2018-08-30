import React, { Component } from 'react';

import { Layout } from 'components/ui';
import { Intro, WhatWeFix, HowWeWork, Valuation, News } from './components';

class Home extends Component {
  render() {
    return (
      <Layout>
        <Intro />
        <WhatWeFix />
        <HowWeWork />
        <Valuation />
        <News />
      </Layout>
    );
  }
}

Home.propTypes = {};

export default Home;
