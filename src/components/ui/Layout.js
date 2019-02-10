import React from 'react';
import { node, string } from 'prop-types';
import { Head, withRouteData } from 'react-static';

import { Section } from 'components/ui/base';
import { Header, Footer } from 'components/ui';

const MainBase = Section.withComponent('main');
const Main = MainBase.extend`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.stickyHeaderOffset + 50}px;
  margin-bottom: 100px;
  padding: 0;
  min-height: 500px;
  width: 100%;
  max-width: ${({ theme, maxWidth }) => maxWidth || `${theme.maxWidth}px`};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin-top: ${({ theme }) => theme.stickyHeaderOffset}px;
    overflow: hidden;
  }
`;

export const Layout = withRouteData(({ children, maxWidth, canonicalUrl }) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Header />
      <Main maxWidth={maxWidth}>{children}</Main>
      <Footer />
    </React.Fragment>
  );
});

Layout.propTypes = {
  children: node.isRequired,
  maxWidth: string,
  canonicalUrl: string,
};
