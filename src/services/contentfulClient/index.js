import tokens from './contentfulTokens';

const contentful = require('contentful');

const client = contentful.createClient({
  space: 'jspcmb9ltjbk',
  accessToken: tokens.deliveryAPI,
  host: 'cdn.contentful.com',
});

export default client;
