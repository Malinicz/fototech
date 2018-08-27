import React, { Component } from 'react';

import { Layout } from 'components/ui';
import { Intro, WhatWeFix, HowWeWork } from './components';

class Home extends Component {
  render() {
    return (
      <Layout>
        <Intro />
        <WhatWeFix />
        <HowWeWork />
      </Layout>
    );
  }
}

Home.propTypes = {};

export default Home;
