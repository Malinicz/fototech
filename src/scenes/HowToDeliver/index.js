import React, { Component } from 'react';
import { object } from 'prop-types';

import { Layout, PageHeading, SegmentedButtons } from 'components/ui';

const pageIcon = require('./assets/how-to-deliver-icon.svg');

class HowToDeliver extends Component {
  render() {
    const {
      location: { pathname },
    } = this.props;

    const segments = [
      {
        initialLink: '/jak-dostarczyc',
        link: '/jak-dostarczyc/poczta',
        label: 'Pocztą',
        icon: '',
      },
      { link: '/jak-dostarczyc/osobiscie', label: 'Osobiście', icon: '' },
    ];

    return (
      <Layout>
        <PageHeading
          icon={pageIcon}
          title="Jak dostarczyć?"
          subtitle="Bardzo prosto! Wybierz sposób, który Ci najbardziej odpowiada."
        />
        <SegmentedButtons segments={segments} activeLink={pathname} />
      </Layout>
    );
  }
}

HowToDeliver.propTypes = {
  location: object.isRequired,
};

export default HowToDeliver;
