import React, { Component } from 'react';

import { Layout } from 'components/ui';
import { Intro, WhatWeFix } from './components';

class Home extends Component {
  render() {
    return (
      <Layout>
        <Intro />
        <WhatWeFix />
      </Layout>
    );
  }
}

Home.propTypes = {};

export default Home;
