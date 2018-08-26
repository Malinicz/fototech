import React, { Component } from 'react';

import { Layout } from 'components/ui';
import { Intro } from './Intro';

class Home extends Component {
  render() {
    return (
      <Layout>
        <Intro />
      </Layout>
    );
  }
}

Home.propTypes = {};

export default Home;
