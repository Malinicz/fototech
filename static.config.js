import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';

import client from './src/services/contentfulClient';

import pl from './src/data/pl';

import {
  flattenDefects,
  flattenPosts,
  getRouteData,
  getServicesDynamicRoutes,
} from './utils';

export const siteRoot = 'https://www.fotonaprawa.pl';
const stagingSiteRoot = 'https://staging-fotonaprawa.netlify.com';
const basePath = '';
const stagingBasePath = '';

export default {
  siteRoot,
  stagingSiteRoot,
  basePath,
  stagingBasePath,
  getSiteData: async () => {
    const contentfulData = await client.getEntries({ limit: 1000 });
    const alerts = contentfulData.items.filter(
      (item) =>
        item.sys &&
        item.sys.contentType &&
        item.sys.contentType.sys &&
        item.sys.contentType.sys.id === 'alert'
    );
    const globalInfo =
      alerts &&
      alerts.length > 0 &&
      alerts[0] &&
      alerts[0].fields &&
      alerts[0].fields.description;

    return {
      siteData: {
        ...pl.shared,
        globalInfo,
      },
    };
  },
  getRoutes: async () => {
    const contentfulData = await client.getEntries({ limit: 1000 });
    const defects = flattenDefects(contentfulData.items);
    const blogPosts = flattenPosts(contentfulData.items);
    const news = contentfulData.items.filter(
      (item) =>
        item.sys &&
        item.sys.contentType &&
        item.sys.contentType.sys &&
        item.sys.contentType.sys.id === 'news'
    );

    const routeData = getRouteData(defects);
    const servicesDynamicRoutes = getServicesDynamicRoutes(routeData);

    return [
      // +++ HOME ROUTES +++ //
      {
        path: pl.shared.navigation.home.slug,
        component: 'src/scenes/Home',
        getData: () => ({
          routeData: pl.home,
          canonicalUrl: `${siteRoot}${pl.shared.navigation.home.slug}`,
          news,
        }),
      },

      // +++ SERVICES ROUTES +++ //

      // main
      {
        path: '/uslugi',
        component: 'src/scenes/Services',
        getData: () => ({
          routeData: {
            ...pl.services,
            hardwareTypes: routeData['naprawa'].reduce((result, model) => {
              return result.find((t) => t.slug === model.type.slug)
                ? result
                : [...result, model.type];
            }, []),
            path: '/uslugi/naprawa',
          },
          canonicalUrl: `${siteRoot}/uslugi`,
        }),
      },

      // dynamic routes
      ...servicesDynamicRoutes,

      // defects
      ...defects.map((defect) => ({
        path: `/${defect.slug}`,
        component: 'src/scenes/Services/Defect',
        getData: () => ({
          routeData: { defect },
          canonicalUrl: `${siteRoot}${defect.slug}`,
        }),
      })),

      // +++ HOW TO DELIVER ROUTES +++ //
      {
        path: pl.shared.navigation.howToDeliver.slug,
        component: 'src/scenes/HowToDeliver',
        getData: () => ({
          routeData: pl.howToDeliver,
          canonicalUrl: `${siteRoot}${pl.shared.navigation.howToDeliver.slug}`,
        }),
      },
      {
        path: pl.shared.navigation.howToDeliver.sections.mail.slug,
        component: 'src/scenes/HowToDeliver',
        getData: () => ({
          routeData: pl.howToDeliver,
          canonicalUrl: `${siteRoot}${pl.shared.navigation.howToDeliver.slug}`,
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

      // +++ BLOG ROUTES +++ //

      // main
      {
        path: pl.shared.navigation.blog.slug,
        component: 'src/scenes/Blog',
        getData: () => ({
          routeData: { ...pl.blog, posts: blogPosts },
          canonicalUrl: `${siteRoot}${pl.shared.navigation.blog.slug}`,
        }),
      },

      // posts
      ...blogPosts.map((post) => ({
        path: `/blog/${post.slug}`,
        component: 'src/scenes/Blog/Post',
        getData: () => ({
          routeData: {
            ...pl.blog,
            post,
            allPosts: blogPosts.filter(
              (singlePost, index) => singlePost.slug !== post.slug && index < 5
            ),
          },
          canonicalUrl: `${siteRoot}/blog/${post.slug}`,
        }),
      })),

      // +++ CONTACT ROUTES +++ //
      {
        path: pl.shared.navigation.contact.slug,
        component: 'src/scenes/Contact',
        getData: () => ({
          routeData: pl.contact,
          canonicalUrl: `${siteRoot}${pl.shared.navigation.contact.slug}`,
        }),
      },
      {
        path: pl.shared.navigation.contact.sections.warszawa.slug,
        component: 'src/scenes/Contact',
        getData: () => ({
          routeData: pl.contact,
          canonicalUrl: `${siteRoot}${pl.shared.navigation.contact.slug}`,
        }),
      },
      {
        path: pl.shared.navigation.contact.sections.krakow.slug,
        component: 'src/scenes/Contact/ContactKrakow',
        getData: () => ({
          routeData: pl.contact,
          canonicalUrl: `${siteRoot}${
            pl.shared.navigation.contact.sections.krakow.slug
          }`,
        }),
      },

      // +++ MAIL SUBMISSION SUCCESS ROUTE +++ //
      {
        path: '/submission-success',
        component: 'src/scenes/MailSubmissionSuccess',
      },

      // +++ PAGE NOT FOUND ROUTE +++ //
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
