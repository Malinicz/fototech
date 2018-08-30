import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';

import client from './src/services/contentfulClient';

import contentPL from './src/data/pl';

const siteRoot = 'http://serwer11003.lh.pl';
const stagingSiteRoot = 'http://serwer11003.lh.pl';
const basePath = 'fototech';
const stagingBasePath = 'fototech';

export default {
  siteRoot,
  stagingSiteRoot,
  basePath,
  stagingBasePath,
  getSiteData: async () => ({
    siteData: contentPL.shared,
  }),
  getRoutes: async () => {
    const contentfulData = await client.getEntries();
    const news = contentfulData.items.filter(
      (item) =>
        item.fields.category && item.fields.category.fields.name === 'news'
    );
    return [
      {
        path: '/',
        component: 'src/scenes/Home',
        getData: async () => ({
          routeData: contentPL.home,
          news,
        }),
      },
      {
        is404: true,
        component: 'src/scenes/404',
      },
    ];
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <title>Fototech - naprawa sprzętu fotograficznego</title>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#fff" />
            <meta
              name="apple-mobile-web-app-status-bar-style"
              content="black-translucent"
            />
            <link
              rel="shortcut icon"
              type="image/png"
              href="/fototech-favicon.png"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
};
