import React, { Component } from 'react';
import { withRouteData } from 'react-static';

import { Header, Footer } from 'components';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>this is home</main>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {};

export default withRouteData(Home);
