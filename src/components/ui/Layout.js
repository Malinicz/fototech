import React from 'react';
import { node } from 'prop-types';

import { Section } from 'components/ui/base';
import { Header, Footer } from 'components/ui';

const MainBase = Section.withComponent('main');
const Main = MainBase.extend`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.stickyHeaderOffset + 50}px;
  margin-bottom: 100px;
  padding: 0;
  min-height: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-top: ${({ theme }) => theme.stickyHeaderOffset}px;
    overflow: hidden;
  }
`;

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};
