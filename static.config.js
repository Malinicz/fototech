import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';

import client from './src/services/contentfulClient';

import pl from './src/data/pl';

const siteRoot = 'https://www.fotonaprawa.pl';
const stagingSiteRoot = 'https://staging-fotonaprawa.netlify.com';
const basePath = '';
const stagingBasePath = '';

export default {
  siteRoot,
  stagingSiteRoot,
  basePath,
  stagingBasePath,
  getSiteData: async () => ({
    siteData: pl.shared,
  }),
  getRoutes: async () => {
    const contentfulData = await client.getEntries();
    const news = contentfulData.items.filter(
      (item) =>
        item.fields.category && item.fields.category.fields.name === 'news'
    );
    return [
      {
        path: pl.shared.navigation.home.slug,
        component: 'src/scenes/Home',
        getData: () => ({
          routeData: pl.home,
          canonicalUrl: `${siteRoot}${pl.shared.navigation.home.slug}`,
          news,
        }),
      },
      {
        path: pl.shared.navigation.howToDeliver.slug,
        component: 'src/scenes/HowToDeliver',
        getData: () => ({
          routeData: pl.howToDeliver,
          canonicalUrl: `${siteRoot}${
            pl.shared.navigation.howToDeliver.sections.mail.slug
          }`,
        }),
      },
      {
        path: pl.shared.navigation.howToDeliver.sections.mail.slug,
        component: 'src/scenes/HowToDeliver',
        getData: () => ({
          routeData: pl.howToDeliver,
          canonicalUrl: `${siteRoot}${
            pl.shared.navigation.howToDeliver.sections.mail.slug
          }`,
        }),
      },
      {
        path: pl.shared.navigation.howToDeliver.sections.individually.slug,
        component: 'src/scenes/HowToDeliver/DeliverIndividually',
        getData: () => ({
          routeData: pl.howToDeliver,
          canonicalUrl: `${siteRoot}${
            pl.shared.navigation.howToDeliver.sections.individually.slug
          }`,
        }),
      },
      {
        path: pl.shared.navigation.services.slug,
        component: 'src/scenes/Services',
        getData: async () => ({
          routeData: pl.services,
          canonicalUrl: `${siteRoot}${
            pl.shared.navigation.services.sections.repair.slug
          }`,
        }),
      },
      {
        path: pl.shared.navigation.services.sections.repair.slug,
        component: 'src/scenes/Services',
        getData: async () => ({
          routeData: pl.services,
          canonicalUrl: `${siteRoot}${
            pl.shared.navigation.services.sections.repair.slug
          }`,
        }),
      },
      {
        path: pl.shared.navigation.services.sections.cleaning.slug,
        component: 'src/scenes/Services/Cleaning',
        getData: async () => ({
          routeData: pl.services,
          canonicalUrl: `${siteRoot}${
            pl.shared.navigation.services.sections.cleaning.slug
          }`,
        }),
      },
      {
        path: pl.shared.navigation.services.sections.calibration.slug,
        component: 'src/scenes/Services/Calibration',
        getData: async () => ({
          routeData: pl.services,
          canonicalUrl: `${siteRoot}${
            pl.shared.navigation.services.sections.calibration.slug
          }`,
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
