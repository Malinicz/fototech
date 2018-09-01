import tokens from './contentfulTokens';

const contentful = require('contentful');

const client = contentful.createClient({
  space: 'jspcmb9ltjbk',
  accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN || tokens.deliveryAPI,
  host: 'cdn.contentful.com',
});

export default client;
