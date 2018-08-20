import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';

import { ThemeProvider, Theme } from 'styles';
import 'styles/global';

const App = () => (
  <Router>
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  </Router>
);

export default hot(module)(App);
