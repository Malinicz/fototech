import React, { Component } from 'react';
import { any } from 'prop-types';
import styled from 'styles';

import { Section } from 'components/ui/base';
import { Layout } from 'components/ui';

import { Heading } from '.';

const ContentSection = styled(Section)`
  flex-direction: column;
  align-items: center;
`;

export class ServicesLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Layout>
        <Heading />
        <ContentSection>{children}</ContentSection>
      </Layout>
    );
  }
}

ServicesLayout.defaultProps = {
  children: null,
};

ServicesLayout.propTypes = {
  children: any,
};
