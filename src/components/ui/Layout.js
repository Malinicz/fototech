import React from 'react';
import { node } from 'prop-types';
import { Head, withRouteData } from 'react-static';

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

export const Layout = withRouteData((props) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href={props.canonicalUrl} />
      </Head>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </React.Fragment>
  );
});

Layout.propTypes = {
  children: node.isRequired,
};
